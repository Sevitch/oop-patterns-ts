export interface ObservableSub<T> {
    next?: (data: T) => void;
    error?: (error: any) => void;
    complete?: () => void;
}

export interface Subscription {
    unsubscribe: () => void
}

export enum EmitType {
    next = 'next',
    error = 'error',
    complete = 'complete'
}
