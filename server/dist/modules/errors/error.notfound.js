"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorNotFound = void 0;
class ErrorNotFound extends Error {
    constructor(msg) {
        super(msg);
        this.statusCode = 404;
    }
}
exports.ErrorNotFound = ErrorNotFound;
