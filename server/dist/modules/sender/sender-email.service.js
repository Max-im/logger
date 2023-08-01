"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.senderEmailSerivce = void 0;
const client_1 = require("@prisma/client");
const sender_repo_1 = require("./sender.repo");
const sender_email_param_1 = require("./sender-email.param");
const sender_email_entity_1 = require("./sender.email.entity");
class SenderEmailSerivce {
    getReceiversByProject() {
        return __awaiter(this, void 0, void 0, function* () {
            const logId = 1;
            const logLevel = client_1.LogLevel.INFO;
            const log = yield sender_repo_1.SenderRepo.getReceivers(logId);
            const users = log === null || log === void 0 ? void 0 : log.project.users.map(({ user }) => ({
                email: user.email,
                payload: log.value,
                notification: user.notifications
                    .map(({ logLevel, provider }) => ({ logLevel, provider }))
                    .find(notification => notification.logLevel === logLevel)
            })).filter(item => item.notification);
            const params = users === null || users === void 0 ? void 0 : users.map(user => new sender_email_param_1.SenderEmailParam(user));
            if (params) {
                const sender = new sender_email_entity_1.SenderEmailEntity(params);
                sender.notify();
            }
        });
    }
}
exports.senderEmailSerivce = new SenderEmailSerivce();
