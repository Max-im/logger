import { LogLevel, NotificationProviders } from '@prisma/client';
import { prisma } from '../../util/db';
import { ErrorDatabase } from '../errors/error.database';

export class NotificationRepo {
    static onGet(userId: string, projectId: string) {
        try {
            return prisma.notification.findMany({ where: { userId, projectId } });
        } catch (err) {
            throw new ErrorDatabase(err);
        }
    }

    static async onCreate(userId: string, projectId: string, logLevel: string) {
        try {
            return await prisma.notification.create({
                data: {
                    // @ts-ignore
                    logLevel,
                    user: { connect: { id: userId } },
                    project: { connect: { id: projectId } }
                }
            });
        } catch (err) {
            throw new ErrorDatabase(err);
        }
    }

    static async onDelete(id: number) {
        try {
            return await prisma.notification.delete({ where: { id } });
        } catch (err) {
            throw new ErrorDatabase(err);
        }
    }
}
