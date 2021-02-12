import {EmitType, ObservableSub, Subscription} from './types';
import {Subject} from "./subject";

export class Observable<T> {
    subscriptions: ObservableSub<T>[] = [];

    // TODO: complete
    constructor(private handler: (sub: Subject<T>) => void) {
    }

    subscribe(sub: ObservableSub<T>): Subscription {
        this.subscriptions.push(sub);
        return {
            unsubscribe: () => this.unsubscribe(sub)
        };
    }

    emit(type: EmitType, data?: T | any): void {
        this.subscriptions.forEach((sub: ObservableSub<T>) => {
            if (type === EmitType.complete) {
                this.unsubscribe(sub)
                return;
            }

            sub[type](data);
        })
    }

    private unsubscribe(sub: ObservableSub<T>): void {
        this.subscriptions = this.subscriptions.filter(arrSub => arrSub !== sub);
    }
}
