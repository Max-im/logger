import path from 'node:path';
import Fastify, { FastifyReply, FastifyRequest } from 'fastify';
import cors from '@fastify/cors';
import jwt from '@fastify/jwt';
import userRoutes from './modules/user/user.route';
import statusRoutes from './modules/status/status.route';
import projectRoutes from './modules/project/project.route';
import registredUserHook from './modules/hooks/registredUser.hook';
import logRoutes from './modules/log/log.route';
import { userSchemas } from './modules/user/user.auth.schema';
import { projectSchemas } from './modules/project/project.schema';
import {
    DONATE_URL, LOG_URL, NOTIFICATION_URL, PAYMENT_URL, PLAN_URL, PROJECT_URL, STATUS_URL, USER_URL
} from './util/urls';
import planRoutes from './modules/plan/plan.route';
import notificationRoutes from './modules/notification/notification.route';
import senderRoutes from './modules/sender/sender.route';
import paymentRoutes from './modules/payment/payment.route';
import donateRoutes from './modules/donate/donate.route';
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

function serverBuilder(options: { [key: string]: any } = {}) {
    const logger = options.logger || true;
    const server = Fastify({ logger });

    server.decorate('registredUser', registredUserHook);
    for (const schema of [...userSchemas, ...projectSchemas]) {
        server.addSchema(schema);
    }

    server.register(require('@fastify/static'), {
        root: path.join(__dirname, 'build'),
        wildcard: false,
    });

    server.get('/*', (request: FastifyRequest, reply: FastifyReply) => {
        // @ts-ignore
        reply.sendFile('index.html');
    });

    server.register(jwt, { secret: <string>process.env.SECRET_OR_KEY });
    server.register(cors, {});
    server.register(statusRoutes, { prefix: STATUS_URL });
    server.register(userRoutes, { prefix: USER_URL });
    server.register(projectRoutes, { prefix: PROJECT_URL });
    server.register(logRoutes, { prefix: LOG_URL });
    server.register(planRoutes, { prefix: PLAN_URL });
    server.register(notificationRoutes, { prefix: NOTIFICATION_URL });
    server.register(paymentRoutes, { prefix: PAYMENT_URL });
    server.register(donateRoutes, { prefix: DONATE_URL });
    server.register(senderRoutes, { prefix: 'api/v1/send' });

    return server;
}

export default serverBuilder;
