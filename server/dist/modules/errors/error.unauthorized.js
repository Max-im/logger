"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorUnauthorized = void 0;
const constants_1 = require("../../util/constants");
class ErrorUnauthorized extends Error {
    constructor(msg) {
        msg = msg || constants_1.UNAUTHORIZED_ERROR;
        super(msg);
        this.statusCode = 401;
    }
}
exports.ErrorUnauthorized = ErrorUnauthorized;
