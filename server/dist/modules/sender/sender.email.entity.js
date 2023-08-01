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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SenderEmailEntity = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const nodemailer_sendgrid_1 = __importDefault(require("nodemailer-sendgrid"));
const sender_entity_1 = require("./sender.entity");
class SenderEmailEntity extends sender_entity_1.SenderEntity {
    constructor(params) {
        super();
        this.params = params;
        this.transport = nodemailer_1.default.createTransport((0, nodemailer_sendgrid_1.default)({
            apiKey: process.env.EMAIL_SENDER_KEY
        }));
    }
    notify() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                for (const param of this.params) {
                    yield this.transport.sendMail(param);
                }
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}
exports.SenderEmailEntity = SenderEmailEntity;
