import { FastifyInstance } from 'fastify';
import { paymentController } from './payment.controller';

async function paymentRoutes(server: FastifyInstance) {
    const onRequest = { onRequest: [server.registredUser] };

    server.get('/:planId', onRequest, paymentController.onGetForm);
}

export default paymentRoutes;