import { prisma } from '../../util/db';
import { ErrorDatabase } from '../errors/error.database';

export class PlanRepo {
    static async getActive() {
        try {
            return await prisma.plan.findMany({ where: { active: true } });
        } catch (err) {
            throw new ErrorDatabase(err);
        }
    }

    static async getById(id: number) {
        try {
            return await prisma.plan.findUnique({ where: { id } });
        } catch (err) {
            throw new ErrorDatabase(err);
        }
    }
}
