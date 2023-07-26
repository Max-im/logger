export class ErrorNotFound extends Error {
    statusCode: number;

    constructor(msg: string) {
        super(msg);
        this.statusCode = 404;
    }
}
