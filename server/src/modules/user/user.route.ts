import { FastifyInstance } from 'fastify';
import { userController } from './user.controller';
import { $ref } from './user.auth.schema';

const authSchema = { schema: { body: $ref('authSchema'), response: { 200: $ref('authResponseSchema') } } };

async function userRoutes(server: FastifyInstance) {
    server.get('/', { onRequest: [server.registredUser] }, userController.getData);
    server.post('/auth', authSchema, userController.auth);
}

export default userRoutes;
