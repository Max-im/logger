import { LogLevel } from '@prisma/client';
import { prisma } from '../../util/db';
import { ErrorDatabase } from '../errors/error.database';

export class LogRepo {
  static async getProjectLogs(projectId: string, skip: number, take: number) {
    try {
      return await prisma.log.findMany({
        where: { projectId },
        take,
        skip,
        orderBy: { id: 'desc' }
      });
    } catch (err) {
      throw new ErrorDatabase(err);
    }
  }

  static async getProjectFiltredLogs(projectId: string, skip: number, take: number, filter: LogLevel[]) {
    try {
      return await prisma.log.findMany({
        // @ts-ignore
        where: { projectId, level: { notIn: filter } },
        take,
        skip,
        orderBy: { id: 'desc' }
      });
    } catch (err) {
      throw new ErrorDatabase(err);
    }
  }

  static async getProjectLogsInfo(projectId: string) {
    try {
      return await prisma.log.groupBy({
        by: ['level'],
        where: { projectId },
        _count: {
          level: true
        }
      });
    } catch (err) {
      throw new ErrorDatabase(err);
    }
  }

  static async getLogItem(id: number) {
    try {
      return await prisma.log.findUnique({ where: { id } });
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
    } catch (err) {
      throw new ErrorDatabase(err);
    }
  }

  static async deleteLogs(ids: number[]) {
    try {
      return await prisma.log.deleteMany({
        where: {
          id: { in: ids }
        }
      });
    } catch (err) {
      throw new ErrorDatabase(err);
    }
  }

  static async deleteExpired() {
    try {
      return await prisma.log.deleteMany({
        where: {
          deleteDate: { lte: new Date() }
        }
      });
    } catch (err) {
      throw new ErrorDatabase(err);
    }
  }
}
