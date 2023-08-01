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
exports.donateController = void 0;
const liqpay_service_1 = require("../liqpay/liqpay.service");
class DonateController {
    onGetParams(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const amount = Number(request.params.amount);
                const liqPayService = new liqpay_service_1.LiqPayService();
                const params = liqPayService.getPayParams(amount, `${amount} donation`, 'paydonate');
                return params;
            }
            catch (err) {
                const code = err.code || 500;
                return reply.code(code).send(err);
            }
        });
    }
    // eslint-disable-next-line
    onCallback(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return request.body;
            }
            catch (err) {
                const code = err.code || 500;
                return reply.code(code).send(err);
            }
        });
    }
}
exports.donateController = new DonateController();
