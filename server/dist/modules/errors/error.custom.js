"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCustom = void 0;
class ErrorCustom extends Error {
    constructor(msg, statusCode, err) {
        super(msg);
        this.statusCode = statusCode || 500;
        if (err) {
            console.log(err);
        }
    }
}
exports.ErrorCustom = ErrorCustom;
