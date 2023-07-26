import { prisma } from '../../util/db';
import { ErrorDatabase } from '../errors/error.database';

export class SenderRepo {
    static async getReceivers(logId: number) {
        try {
            return await prisma.log.findUnique({
                where: { id: logId },
                include: {
                    project: {
                        include: {
                            users: {
                                include: {
                                    user: {
                                        include: { notifications: true }
                                    }
                                }
                            }
                        }
                    }
                }
            });
        } catch (err) {
            throw new ErrorDatabase(err);
        }
    }
}
