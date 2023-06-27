import { Log, LogLevel } from '@prisma/client';
import { LogRepo } from './log.repo';

export class LogEntity implements Log {
  id: number;
  value: string;
  level: LogLevel;
  opened: boolean;
  deleteDate: Date;
  created: Date;
  projectId: string;

  constructor(log: Log) {
    this.id = log.id;
    this.value = log.value;
    this.level = log.level;
    this.opened = log.opened;
    this.deleteDate = log.deleteDate;
    this.projectId = log.projectId;
    this.created = log.created;
  }

  static async getLogs(projectId: string, skip: number, take: number, filter: any) {
    return LogRepo.getProjectLogs(projectId, skip, take);
  }

  static async getInfo(projectId: string) {
    return LogRepo.getProjectLogsInfo(projectId);
  }
  
  static async markRead(logId: number) {
    return LogRepo.markRead(logId);
  }
  
  static async deleteLogs(logIdStr: string) {
    const logIds = logIdStr.split(',').map(id => Number(id));
    await LogRepo.deleteLogs(logIds);
  }

}
