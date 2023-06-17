import { prisma } from '../../util/db';
import { ErrorDatabase } from '../errors/error.database';

export class StatusRepo {
  static async getUsersCount() {
    try {
      return await prisma.user.count();
    } catch (err) {
      throw new ErrorDatabase(err);
    }
  }
  
  static async getProjectCount() {
    try {
      return await prisma.project.count();
    } catch (err) {
      throw new ErrorDatabase(err);
    }
  }
  
}
