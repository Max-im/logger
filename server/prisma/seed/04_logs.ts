import { PrismaClient, RoleTypes, Log, LogLevel, PlanTypes } from '@prisma/client';

const prisma = new PrismaClient();

// @ts-ignore
const email = <string>process.env.SEED_ADMIN_EMAIL

export async function seedLogs() {
  console.log('Logs start seeding');


  const logsMap = {
    [LogLevel.FATAL]: 10,
    [LogLevel.ERROR]: 20,
    [LogLevel.WARN]: 20,
    [LogLevel.DEBUG]: 10,
    [LogLevel.INFO]: 30,
  }

  const data: Log[] = [];

  for(const level in logsMap) {
    const arr = new Array(logsMap[level]).fill('lorem ipsum');
    for (const i of arr) {
      data.push({
        value: i,
        projectId,
        // @ts-ignore
        level
      });
    }
  }

  // @ts-ignore
  await prisma.log.createMany({ data });
  
  console.log('Logs seed');
}
