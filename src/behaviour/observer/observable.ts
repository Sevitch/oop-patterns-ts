import {NotificationKind, Subscriber, Subscription} from './types';

export class Observable<T> {
    protected subscriptions: Subscriber<T>[] = [];

    subscribe(sub: Subscriber<T>): Subscription {
        this.subscriptions.push(sub);
        return {
            unsubscribe: () => this.unsubscribe(sub)
        };
    }

    protected notify(type: NotificationKind, data?: T | any): void {
        this.subscriptions.forEach((sub: Subscriber<T>) => {
            !!sub[type] && sub[type](data);
            if (type === NotificationKind.complete) {
                this.unsubscribe(sub)
                return;
            }
        })
    }

    private unsubscribe(sub: Subscriber<T>): void {
        this.subscriptions = this.subscriptions.filter(arrSub => arrSub !== sub);
    }
}
