import { prisma } from '../../util/db';

export class ProjectRepo {
  static async findUserProjects(userId: string) {
    try {
      return await prisma.project.findMany({where: {users: {every: { userId }}}});
    } catch (err) {
      throw err;
    }
  }

  static async findOne(userId: string, id: string) {
    try {
      return await prisma.project.findFirst({where: { id, users: {some: { userId }} } });
    } catch (err) {
      throw err;
    }
  }
  
  static async delete(id: string) {
    try {
      return await prisma.project.delete({ where: { id } });
    } catch (err) {
      throw err;
    }
  }

  static async create(userId: string, title: string, description: string) {
    try {
      return await prisma.project.create({data: { title, description, users: {create: [{ userId }]}}});
    } catch (err) {
      throw err;
    }
  }
}
