"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorDatabase = void 0;
const error_custom_1 = require("./error.custom");
class ErrorDatabase extends error_custom_1.ErrorCustom {
    constructor(err) {
        const msg = 'Database Error';
        const statusCode = 500;
        super(msg, statusCode, err);
        this.statusCode = 500;
    }
}
exports.ErrorDatabase = ErrorDatabase;
