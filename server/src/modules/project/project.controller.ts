import { FastifyReply, FastifyRequest } from 'fastify';
import { Project } from '@prisma/client';
import { ProjectEntity } from './project.entity';
import { CreateProjectInput } from './project.schema';

class ProjectController {
  async getUserProjects(request: FastifyRequest, reply: FastifyReply): Promise<{projects: Project[]}> {
    try {
      // @ts-ignore
      const projects = await ProjectEntity.findUserProjects(request.user.id);

      return { projects };
    } catch(err) {
      const code = err.code || 500;
      return reply.code(code).send(err);
    }
  }
  
  async getUserProject(request: FastifyRequest<{Params: {id: string};}>, reply: FastifyReply): Promise<{project: Project}> {
    try {
      // @ts-ignore
      const project = await ProjectEntity.findUserProjectById(request.user.id, request.params.id);

      return { project };
    } catch(err) {
      const code = err.code || 500;
      return reply.code(code).send(err);
    }
  }

  async create(request: FastifyRequest<{Body: CreateProjectInput;}>, reply: FastifyReply): Promise<{project: Project}> {
    try {
      const { title, description } = request.body;

      // @ts-ignore
      const project = await ProjectEntity.create(request.user.id, title, description);
      return reply.code(201).send({ project });
    } catch(err) {
      const code = err.code || 500;
      return reply.code(code).send(err);
    }
  }

  async delete(request: FastifyRequest<{Params: {id: string};}>, reply: FastifyReply): Promise<{project: Project}> {
    try {
      const { id } = request.params;
      
      // @ts-ignore
      await ProjectEntity.delete(request.user.id, id);
      return reply.code(200).send();
    } catch(err) {
      const code = err.code || 500;
      console.log(err.message)
      return reply.code(code).send(err);
    }
  }
}

export const projectController = new ProjectController();