import Fastify from 'fastify';
import cors from '@fastify/cors';
import jwt from '@fastify/jwt';
import userRoutes from './modules/user/user.route';
import statusRoutes from './modules/status/status.route';
import registredUserHook from './modules/hooks/registredUser.hook'; 
import { userSchemas } from './modules/user/user.auth.schema';

declare module 'fastify' {
  export interface FastifyInstance {
    registredUser: any;
  }
}

function serverBuilder() {
  const server = Fastify();
  
  server.decorate('registredUser', registredUserHook);
  for (const schema of [...userSchemas]) {
    server.addSchema(schema);
  }

  server.register(jwt, { secret: <string>process.env.SECRET_OR_KEY });
  server.register(cors, {});
  server.register(statusRoutes, { prefix: 'api/v1/status' });
  server.register(userRoutes, { prefix: 'api/v1/user' });

  return server;
}

export default serverBuilder;