import { Project } from '@prisma/client';
import { ErrorNotFound } from '../errors/error.notfound';
import { ProjectRepo } from './project.repo';

export class ProjectEntity implements Project {
  id: string;
  title: string;
  description: string;

  constructor(project: Project) {
    this.id = project.id;
    this.title = project.title;
    this.description = project.description;
  }

  static async findUserProjects(userId: string) {
    const projects = await ProjectRepo.findUserProjects(userId);
    return projects;
  }

  static async delete(userId: string, id: string) {
    const project = await ProjectRepo.findOne(userId, id);
    if (!project) throw new ErrorNotFound('Project not found');
    await ProjectRepo.delete(id);
    return;
  }

  static async create(userId: string, title: string, description: string) {
    const projects = await ProjectRepo.create(userId, title, description);
    return projects;
  }
}
