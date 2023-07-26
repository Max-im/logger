import { FastifyReply, FastifyRequest } from 'fastify';
import { LiqPayService } from '../liqpay/liqpay.service';

class DonateController {
    async onGetParams(request: FastifyRequest<{ Params: { amount: string }; }>, reply: FastifyReply): Promise<any> {
        try {
            const amount = Number(request.params.amount);
            const liqPayService = new LiqPayService();
            const params = liqPayService.getPayParams(amount, `${amount} donation`, 'paydonate');
            return params;

        } catch (err) {
            const code = err.code || 500;
            return reply.code(code).send(err);
        }
    }
    async onCallback(request: FastifyRequest, reply: FastifyReply): Promise<any> {
        try {
            return request.body;
        } catch (err) {
            const code = err.code || 500;
            return reply.code(code).send(err);
        }
    }
}

export const donateController = new DonateController();
