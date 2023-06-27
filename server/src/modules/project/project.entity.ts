import { Project } from '@prisma/client';
import { ErrorNotFound } from '../errors/error.notfound';
import { ProjectRepo } from './project.repo';
import { ErrorForbiden } from '../errors/error.unauthorized copy';

export class ProjectEntity implements Project {
  id: string;
  title: string;
  created: Date;

  constructor(project: Project) {
    this.id = project.id;
    this.created = project.created;
    this.title = project.title;
  }

  static async findUserProjects(userId: string) {
    const projects = await ProjectRepo.findUserProjects(userId);
    return projects;
  }
  
  static async findUserProjectById(userId: string, projectId: string) {
    const project = await ProjectRepo.findOne(userId, projectId);
    if (!project) throw new ErrorNotFound('Project not found');
    return new ProjectEntity(project)
  }

  static async delete(userId: string, id: string) {
    const project = await ProjectRepo.findOne(userId, id);
    if (!project) throw new ErrorNotFound('Project not found');
    await ProjectRepo.delete(id);
    return;
  }

  static async create(userId: string, title: string) {
    const projects = await ProjectRepo.create(userId, title);
    return projects;
  }

  static async hasAccess(userId: string, projectId: string) {
    const userHasAcces = ProjectRepo.findOne(userId, projectId);
    if (!userHasAcces) throw new ErrorForbiden(); 
  }
}
