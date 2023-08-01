"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SenderEmailParam = void 0;
const sender_param_1 = require("./sender.param");
class SenderEmailParam extends sender_param_1.SenderParam {
    // eslint-disable-next-line
    constructor(userData) {
        super();
        this.from = process.env.EMAIL_SENDER;
        this.to = userData.email;
        this.subject = userData.notification.logLevel;
        this.html = `<p>${userData.payload}</p>`;
    }
}
exports.SenderEmailParam = SenderEmailParam;
