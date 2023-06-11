import { FastifyReply, FastifyRequest } from 'fastify';
import { ErrorUnauthorized } from '../errors/error.unauthorized'; 

async function verifyAuthHook(request: FastifyRequest, reply: FastifyReply) {
  try {
    await request.jwtVerify();
  } catch (err) {
    reply.send(new ErrorUnauthorized())
  }
}

export default verifyAuthHook;