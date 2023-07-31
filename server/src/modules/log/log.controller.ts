import { FastifyReply, FastifyRequest } from 'fastify';
import { Log, LogLevel } from '@prisma/client';
import { ProjectEntity } from '../project/project.entity';
import { LogEntity } from './log.entity';
import { ErrorNotFound } from '../errors/error.notfound';
import { ErrorForbiden } from '../errors/error.forbidden';
import { UserEntity } from '../user/user.entity';
import { PlanEntity } from '../plan/plan.entity';


interface IGetLogQuery { skip: number; take: number; filter?: string; }
interface IGetLogParam { projectId: string; }
interface ICreateBody {
    projectId: string;
    userId: string;
    value: string;
    level: LogLevel;
}

class LogController {
    async getLogs(
        request: FastifyRequest<{ Params: IGetLogParam; Querystring: IGetLogQuery }>,
        reply: FastifyReply
    ): Promise<{ logs: Log[] }> {
        try {
            const skip = Number(request.query.skip) || 0;
            const take = Number(request.query.take) || 20;
            const filter = request.query.filter ? request.query.filter.split(',') as LogLevel[] : null;

            await ProjectEntity.hasAccess(request.user.id, request.params.projectId);
            const logs = await LogEntity.getLogs(request.params.projectId, skip, take, filter);

            return { logs };
        } catch (err) {
            const code = err.code || 500;
            return reply.code(code).send(err);
        }
    }

    async getInfo(
        request: FastifyRequest<{ Params: { projectId: string }; }>,
        reply: FastifyReply
    ): Promise<{ info: any }> {
        try {
            await ProjectEntity.hasAccess(request.user.id, request.params.projectId);
            const info = await LogEntity.getInfo(request.params.projectId);

            return { info };
        } catch (err) {
            const code = err.code || 500;
            return reply.code(code).send(err);
        }
    }

    async markReadLog(request: FastifyRequest<{ Params: { projectId: string, logId: number }; }>, reply: FastifyReply) {
        try {
            await ProjectEntity.hasAccess(request.user.id, request.params.projectId);
            await LogEntity.markRead(Number(request.params.logId));

            return;
        } catch (err) {
            const code = err.code || 500;
            return reply.code(code).send(err);
        }
    }

    async deleteLogs(request: FastifyRequest<{ Params: { projectId: string, logIds: string }; }>, reply: FastifyReply) {
        try {
            await ProjectEntity.hasAccess(request.user.id, request.params.projectId);
            await LogEntity.deleteLogs(request.params.logIds);

            return;
        } catch (err) {
            const code = err.code || 500;
            return reply.code(code).send(err);
        }
    }

    async logItem(
        request: FastifyRequest<{ Params: { projectId: string, logId: number }; }>,
        reply: FastifyReply
    ): Promise<{ log: Log }> {
        try {
            await ProjectEntity.hasAccess(request.user.id, request.params.projectId);
            const log = await LogEntity.getLogItem(Number(request.params.logId));
            if (!log) throw new ErrorNotFound('Log not found');

            return { log };
        } catch (err) {
            const code = err.code || 500;
            return reply.code(code).send(err);
        }
    }

    async onCreate(request: FastifyRequest<{ Body: ICreateBody; }>, reply: FastifyReply) {
        try {
            const { projectId, userId, value, level } = request.body;
            const project = await ProjectEntity.findUserProjectById(userId, projectId);

            if (!project) throw new ErrorForbiden();

            const user = await UserEntity.findById(userId);
            const currentPlan = await PlanEntity.onGetById(user.planId);

            const deleteDate = new Date();
            deleteDate.setDate(deleteDate.getDate() + currentPlan.storingDays);

            await LogEntity.createLogItem(projectId, value, level, deleteDate);

            return;
        } catch (err) {
            const code = err.code || 500;
            return reply.code(code).send(err);
        }
    }
}

export const logController = new LogController();
