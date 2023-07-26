import { FastifyInstance } from 'fastify';
import { statusController } from './status.controller';

async function userRoutes(server: FastifyInstance) {
    server.get('/', statusController.getStatus);
    server.get('/info', statusController.getInfo);
    server.get('/stat', statusController.getStat);
}

export default userRoutes;
