import { FastifyReply, FastifyRequest } from 'fastify';
import { PlanEntity } from '../plan/plan.entity';
import { LiqPayService } from '../liqpay/liqpay.service';

class PaymentController {
    async onGetParams(request: FastifyRequest<{ Params: { planId: string }; }>, reply: FastifyReply): Promise<any> {
        try {
            const plan = await PlanEntity.onGetById(Number(request.params.planId));
            const liqPayService = new LiqPayService();
            const params = liqPayService.getPayParams(plan.cost, `${plan.name} for ${request.user.id}`);
            return params;

        } catch (err) {
            const code = err.code || 500;
            return reply.code(code).send(err);
        }
    }
}

export const paymentController = new PaymentController();