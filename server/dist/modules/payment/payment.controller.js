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
exports.paymentController = void 0;
const plan_entity_1 = require("../plan/plan.entity");
const liqpay_service_1 = require("../liqpay/liqpay.service");
class PaymentController {
    onGetParams(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const plan = yield plan_entity_1.PlanEntity.onGetById(Number(request.params.planId));
                const liqPayService = new liqpay_service_1.LiqPayService();
                const params = liqPayService.getPayParams(plan.cost, `${plan.name} for ${request.user.id}`);
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
                console.log(request.body);
                return request.body;
            }
            catch (err) {
                const code = err.code || 500;
                return reply.code(code).send(err);
            }
        });
    }
}
exports.paymentController = new PaymentController();
