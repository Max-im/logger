"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiqPayService = void 0;
const node_crypto_1 = __importDefault(require("node:crypto"));
class LiqPayService {
    constructor() {
        this.language = 'en';
        this.currency = 'USD';
        this.version = '3';
        this.publicKey = process.env.LIQPAY_PUBLIC_KEY;
        this.privateKey = process.env.LIQPAY_PRIVATE_KEY;
        this.resultUrl = process.env.LIQPAY_CLIENT_REDIRECT;
        this.serverUrl = process.env.LIQPAY_SERVER_REDIRECT;
    }
    getPayParams(amount, description, action = 'pay') {
        const params = {
            /* eslint-disable */
            public_key: this.publicKey,
            result_url: this.resultUrl,
            server_url: this.serverUrl,
            /* eslint-enable */
            version: this.version,
            language: this.language,
            currency: this.currency,
            action,
            amount,
            description,
        };
        const data = Buffer.from(JSON.stringify(params)).toString('base64');
        const signature = this.getSignature(this.privateKey + data + this.privateKey);
        return { data, signature };
    }
    getSignature(str) {
        const sha1 = node_crypto_1.default.createHash('sha1');
        sha1.update(str);
        return sha1.digest('base64');
    }
}
exports.LiqPayService = LiqPayService;
