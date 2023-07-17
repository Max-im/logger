import { FastifyReply, FastifyRequest } from 'fastify';
import { Notification } from '@prisma/client';
// @ts-ignore
import LiqPay from 'liqpay-sdk-nodejs';
import { PlanEntity } from '../plan/plan.entity';

class PaymentController {
    async onGetForm(request: FastifyRequest<{ Params: { planId: string }; }>, reply: FastifyReply): Promise<any> {
        try {
            const plan = await PlanEntity.onGetById(Number(request.params.planId));
            const liqPay = new LiqPay(process.env.LIQPAY_PUBLIC_KEY, process.env.LIQPAY_PRIVATE_KEY);
            const form = liqPay.cnb_form({
                action: 'pay',
                language: 'en',
                amount: plan.cost,
                currency: 'USD',
                description: `${plan.name} plan for user ${request.user.id}`,
                version: '3',
                paytype: 'card',
                result_url: 'http://localhost:3000/plan'
            });
            return form;

        } catch (err) {
            const code = err.code || 500;
            return reply.code(code).send(err);
        }
    }
}

export const paymentController = new PaymentController();