import { FastifyReply, FastifyRequest } from 'fastify';
import { LogLevel, Notification } from '@prisma/client';
import { ProjectEntity } from '../project/project.entity';
import { NotificationEntity } from './notification.entity';

class NotificationController {
    async onGet(
        request: FastifyRequest<{ Params: { projectId: string }; }>,
        reply: FastifyReply
    ): Promise<{ notifications: Notification[] }> {
        try {
            const projectId = request.params.projectId;
            await ProjectEntity.hasAccess(request.user.id, projectId);

            const notifications = await NotificationEntity.onGet(request.user.id, projectId);
            return { notifications };
        } catch (err) {
            const code = err.code || 500;
            return reply.code(code).send(err);
        }
    }

    async onCreate(
        request: FastifyRequest<{ Body: { level: string, projectId: string } }>,
        reply: FastifyReply
    ): Promise<{ notification: Notification }> {
        try {
            const { projectId, level } = request.body;

            await ProjectEntity.hasAccess(request.user.id, projectId);

            const notification = await NotificationEntity.onCreate(request.user.id, projectId, level);

            return { notification };
        } catch (err) {
            const code = err.code || 500;
            return reply.code(code).send(err);
        }
    }

    async onDelete(
        request: FastifyRequest<{ Params: { projectId: string, notificationId: string }; }>,
        reply: FastifyReply
    ): Promise<void> {
        try {
            const { notificationId, projectId } = request.params;
            await ProjectEntity.hasAccess(request.user.id, projectId);
            await NotificationEntity.onDelete(notificationId);

        } catch (err) {
            const code = err.code || 500;
            return reply.code(code).send(err);
        }
    }
}

export const notificationController = new NotificationController();
