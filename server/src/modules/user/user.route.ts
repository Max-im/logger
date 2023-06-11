import { FastifyInstance } from 'fastify';
import {userController} from './user.controller';
import { $ref } from './user.auth.schema';

const authSchema = {schema: {body: $ref('authSchema'), response: { 201: $ref('authResponseSchema')}}};

async function userRoutes(server: FastifyInstance) {
  server.get('/', { onRequest: [server.attachUser]}, userController.getData);
  server.post('/auth', {schema: {body: $ref('authSchema'), response: { 201: $ref('authResponseSchema')}}}, userController.auth);
}

export default userRoutes;