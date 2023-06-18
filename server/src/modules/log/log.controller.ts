import { FastifyReply, FastifyRequest } from 'fastify';
import { Log } from '@prisma/client';
import { LogRepo } from './log.repo';
import { CreateProjectInput } from './project.schema';
import { ProjectRepo } from '../project/project.repo';
import { ErrorForbiden } from '../errors/error.unauthorized copy';

class LogController {
  async getLogs(request: FastifyRequest<{Params: {projectId: string};}>, reply: FastifyReply): Promise<{logs: Log[]}> {
    try {
      const userHasAcces = ProjectRepo.findOne(request.user.id, request.params.projectId);
      if (!userHasAcces) throw new ErrorForbiden();
      const logs = await LogRepo.getProjectLogs(request.params.projectId);

      return { logs };
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

  async create(request: FastifyRequest<{Body: CreateProjectInput;}>, reply: FastifyReply): Promise<{project: Project}> {
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