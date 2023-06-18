import { prisma } from '../../util/db';
import { ErrorDatabase } from '../errors/error.database';

export class LogRepo {
  static async getProjectLogs(projectId: string) {
    try {
      return await prisma.log.findMany({where: { projectId }, take: 15, orderBy: {id: 'desc'}});
    } catch (err) {
      throw new ErrorDatabase(err);
    }
  }
  
  static async markRead(id: number) {
    try {
      return await prisma.log.update({
        where: { id },
        data: { opened: true }
      });
      // findMany({where: { projectId }, take: 15, orderBy: {id: 'desc'}});
    } catch (err) {
      throw new ErrorDatabase(err);
    }
  }
}
