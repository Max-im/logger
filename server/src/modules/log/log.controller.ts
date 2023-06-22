import { FastifyReply, FastifyRequest } from 'fastify';
import { Log } from '@prisma/client';
import { LogRepo } from './log.repo';
import { CreateProjectInput } from './project.schema';
import { ProjectRepo } from '../project/project.repo';
import { ErrorForbiden } from '../errors/error.unauthorized copy';

class LogController {
  async getLogs(request: FastifyRequest<{Params: {projectId: string}; Querystring: {skip: number, take: number}}>, reply: FastifyReply): Promise<{logs: Log[]}> {
    try {
      const skip = Number(request.query.skip) || 0;
      const take = Number(request.query.take) || 20;

      const userHasAcces = ProjectRepo.findOne(request.user.id, request.params.projectId);
      if (!userHasAcces) throw new ErrorForbiden();
      const logs = await LogRepo.getProjectLogs(request.params.projectId, skip, take);

      return { logs };
    } catch(err) {
      const code = err.code || 500;
      return reply.code(code).send(err);
    }
  }
  
  async getInfo(request: FastifyRequest<{Params: {projectId: string};}>, reply: FastifyReply): Promise<{info: any}> {
    try {
      const userHasAcces = ProjectRepo.findOne(request.user.id, request.params.projectId);
      if (!userHasAcces) throw new ErrorForbiden();
      const info = await LogRepo.getProjectLogsInfo(request.params.projectId);
      
      return { info };
    } catch(err) {
      const code = err.code || 500;
      return reply.code(code).send(err);
    }
  }
  
  async readLog(request: FastifyRequest<{Params: {projectId: string, logId: number};}>, reply: FastifyReply) {
    try {
      const userHasAcces = ProjectRepo.findOne(request.user.id, request.params.projectId);
      if (!userHasAcces) throw new ErrorForbiden();

      await LogRepo.markRead(Number(request.params.logId));

      return;
    } catch(err) {
      const code = err.code || 500;
      return reply.code(code).send(err);
    }
  }
  
  async deleteLogs(request: FastifyRequest<{Params: {projectId: string, logIds: string};}>, reply: FastifyReply) {
    try {
      const userHasAcces = ProjectRepo.findOne(request.user.id, request.params.projectId);
      if (!userHasAcces) throw new ErrorForbiden();

      const logIds = request.params.logIds.split(',').map(id => Number(id));
      await LogRepo.deleteLogs(logIds);

      return;
    } catch(err) {
      const code = err.code || 500;
      return reply.code(code).send(err);
    }
  }

  async create(request: FastifyRequest<{Body: CreateProjectInput;}>, reply: FastifyReply) {
    try {
      // const { title } = request.body;

      // const project = await ProjectEntity.create(request.user.id, title);
      // return reply.code(201).send({ project });
    } catch(err) {
      const code = err.code || 500;
      return reply.code(code).send(err);
    }
  }
}

export const logController = new LogController();