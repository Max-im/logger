import { prisma } from '../../util/db';
import { ErrorDatabase } from '../errors/error.database';

export class LogRepo {
  static async getProjectLogs(userId: string, projectId: string) {
    try {
      return await prisma.log.findMany({where: { projectId }, take: 10, orderBy: {id: 'asc'}});
    } catch (err) {
      throw new ErrorDatabase(err);
    }
  }
}
