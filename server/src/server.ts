import Fastify from 'fastify';
import cors from '@fastify/cors';
import jwt from '@fastify/jwt';
import userRoutes from './modules/user/user.route';
import statusRoutes from './modules/status/status.route';
import projectRoutes from './modules/project/project.route';
import registredUserHook from './modules/hooks/registredUser.hook'; 
import logRoutes from './modules/log/log.route';
import { userSchemas } from './modules/user/user.auth.schema';
import { projectSchemas } from './modules/project/project.schema';
import { LOG_URL, PLAN_URL, PROJECT_URL, STATUS_URL, USER_URL } from './util/urls';
import planRoutes from './modules/plan/plan.route';
import './jobs';

declare module 'fastify' {
  export interface FastifyInstance {
    registredUser: any;
  }
}

declare module '@fastify/jwt' {
  interface FastifyJWT {
    user: {
      id: string;
    };
  }
}

function serverBuilder() {
  const server = Fastify();
  
  server.decorate('registredUser', registredUserHook);
  for (const schema of [...userSchemas, ...projectSchemas]) {
    server.addSchema(schema);
  }

  server.register(jwt, { secret: <string>process.env.SECRET_OR_KEY });
  server.register(cors, {});
  server.register(statusRoutes, { prefix: STATUS_URL });
  server.register(userRoutes, { prefix: USER_URL });
  server.register(projectRoutes, { prefix: PROJECT_URL });
  server.register(logRoutes, { prefix: LOG_URL });
  server.register(planRoutes, { prefix: PLAN_URL });

  return server;
}

export default serverBuilder;