export interface ISubjectLike<T> {
    next(data?: T): void;
    error(data?: any): void;
    complete(): void;
}

export interface Subscriber<T> {
    next?: (data: T) => void;
    error?: (data: any) => void;
    complete?: () => void;
}

export interface Subscription {
    unsubscribe: () => void
}

export enum NotificationKind {
    next = 'next',
    error = 'error',
    complete = 'complete'
}
