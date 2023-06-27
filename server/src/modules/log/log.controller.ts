import { FastifyReply, FastifyRequest } from 'fastify';
import { Log, LogLevel } from '@prisma/client';
import { CreateProjectInput } from './project.schema';
import { ProjectEntity } from '../project/project.entity';
import { LogEntity } from './log.entity';
import { ErrorNotFound } from '../errors/error.notfound';

class LogController {
  async getLogs(request: FastifyRequest<{Params: {projectId: string}; Querystring: {skip: number, take: number, filter?: string}}>, reply: FastifyReply): Promise<{logs: Log[]}> {
    try {
      const skip = Number(request.query.skip) || 0;
      const take = Number(request.query.take) || 20;
      const filter = request.query.filter ? request.query.filter.split(',') as LogLevel[] : null;

      await ProjectEntity.hasAccess(request.user.id, request.params.projectId);
      const logs = await LogEntity.getLogs(request.params.projectId, skip, take, filter);

      return { logs };
    } catch(err) {
      const code = err.code || 500;
      return reply.code(code).send(err);
    }
  }
  
  async getInfo(request: FastifyRequest<{Params: {projectId: string};}>, reply: FastifyReply): Promise<{info: any}> {
    try {
      await ProjectEntity.hasAccess(request.user.id, request.params.projectId);
      const info = await LogEntity.getInfo(request.params.projectId);
      
      return { info };
    } catch(err) {
      const code = err.code || 500;
      return reply.code(code).send(err);
    }
  }
  
  async markReadLog(request: FastifyRequest<{Params: {projectId: string, logId: number};}>, reply: FastifyReply) {
    try {
      await ProjectEntity.hasAccess(request.user.id, request.params.projectId);
      await LogEntity.markRead(Number(request.params.logId));

      return;
    } catch(err) {
      const code = err.code || 500;
      return reply.code(code).send(err);
    }
  }
  
  async deleteLogs(request: FastifyRequest<{Params: {projectId: string, logIds: string};}>, reply: FastifyReply) {
    try {
      await ProjectEntity.hasAccess(request.user.id, request.params.projectId);
      await LogEntity.deleteLogs(request.params.logIds);

      return;
    } catch(err) {
      const code = err.code || 500;
      return reply.code(code).send(err);
    }
  }
  
  async logItem(request: FastifyRequest<{Params: {projectId: string, logId: number};}>, reply: FastifyReply): Promise<{log: Log}> {
    try {
      await ProjectEntity.hasAccess(request.user.id, request.params.projectId);
      const log = await LogEntity.getLogItem(Number(request.params.logId));
      if (!log) throw new ErrorNotFound('Log not found');

      return { log };
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