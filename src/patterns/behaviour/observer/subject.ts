import {Observable} from "./observable";
import {ISubjectLike, NotificationKind} from "./types";

export class Subject<T> extends Observable<T> implements ISubjectLike<T> {
    next(data?: T): void {
        this.notify(NotificationKind.next, data);
    }

    error(data?: any): void {
        this.notify(NotificationKind.error, {error: 'Error', data});
    }

    complete(): void {
        this.notify(NotificationKind.complete);
    }
}
