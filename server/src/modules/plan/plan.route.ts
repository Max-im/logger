import { FastifyInstance } from 'fastify';
import {planController} from './plan.controller';


async function planRoutes(server: FastifyInstance) {
  server.get('/', planController.getActivePlans);
}

export default planRoutes;