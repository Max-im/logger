import { FastifyReply, FastifyRequest } from 'fastify';
import { Plan } from '@prisma/client';
import { PlanEntity } from './plan.entity';

class PlanController {
    async getActivePlans(request: FastifyRequest, reply: FastifyReply): Promise<{ plans: Omit<Plan, 'active'>[] }> {
        try {
            const plans = await PlanEntity.getActive();
            return { plans };
        } catch (err) {
            const code = err.code || 500;
            return reply.code(code).send(err);
        }
    }
}

export const planController = new PlanController();
