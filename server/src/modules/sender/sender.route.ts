import { FastifyInstance } from 'fastify';
import { senderEmailSerivce } from './sender-email.service';


async function senderRoutes(server: FastifyInstance) {
  server.get('/', senderEmailSerivce.getReceiversByProject);
}

export default senderRoutes;