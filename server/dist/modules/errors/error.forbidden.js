"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorForbiden = void 0;
const error_custom_1 = require("./error.custom");
class ErrorForbiden extends error_custom_1.ErrorCustom {
    constructor() {
        super('Forbidden');
        this.statusCode = 403;
    }
}
exports.ErrorForbiden = ErrorForbiden;
