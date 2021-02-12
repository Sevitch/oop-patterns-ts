import {Observable} from "./observable";
import {EmitType} from "./types";

export class Subject<T> extends Observable<T> {
    constructor() {
        super(null);
    }

    next(data?: T): void {
        this.emit(EmitType.next, data);
    }

    error(data?: any): void {
        this.emit(EmitType.error, {error: 'Error', data});
    }

    complete(): void {
        this.emit(EmitType.complete);
    }
}
