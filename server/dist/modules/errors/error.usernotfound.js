"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorUserNotFound = void 0;
const error_notfound_1 = require("./error.notfound");
const constants_1 = require("../../util/constants");
class ErrorUserNotFound extends error_notfound_1.ErrorNotFound {
    constructor() {
        super(constants_1.USER_NOT_FOUND);
    }
}
exports.ErrorUserNotFound = ErrorUserNotFound;
