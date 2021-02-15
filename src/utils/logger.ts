class Logger {
    message: string = '';

    add(str: string): void {
        this.message += str;
    }

    get(): string {
        return this.message;
    }
}

export const logger = new Logger();
