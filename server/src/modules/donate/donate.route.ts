import { FastifyInstance } from 'fastify';
import { donateController } from './donate.controller';

async function donateRoutes(server: FastifyInstance) {
    server.get('/:amount', donateController.onGetParams);
    server.post('/', donateController.onCallback);
}

export default donateRoutes;
