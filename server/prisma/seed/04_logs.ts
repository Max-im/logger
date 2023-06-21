import { PrismaClient, RoleTypes, Log, LogLevel, PlanTypes } from '@prisma/client';

const prisma = new PrismaClient();

// @ts-ignore
const email = <string>process.env.SEED_ADMIN_EMAIL

export async function seedLogs() {
  console.log('Logs start seeding');

  const user = await prisma.user.findUnique({where: { email }, include: {projects: true, plan: true}});

  if (!user) {
    throw new Error('User NOT FOUND');
  }
  
  if (user.projects.length === 0) {
    throw new Error('User has no projects');
  }

  const days = user.plan.storingDays;
  const projectId = user.projects[0].projectId;
  
  const logsMap: {[key in LogLevel]: {num: number, value: any}} = {
    [LogLevel.FATAL]: {num: 2, value: new Error('fatal error')},
    [LogLevel.ERROR]: {num: 2, value: new Error('error text')},
    [LogLevel.WARN]: {num: 2, value: new Error('warning text')},
    [LogLevel.DEBUG]: {num: 2, value: {info: 'develop info'}},
    [LogLevel.INFO]: {num: 2, value: 'some info'},
  }

  const data: Log[] = [];
  const date = new Date();

  for(const level in logsMap) {
    const logType = logsMap[level];
    const arr = new Array(logType.num).fill(logType.value);
    for (const item of arr) {
      let value;
      if (item instanceof Error) {
        value = item.toString();
      } else if (typeof item === 'string') {
        value = item;
      } else {
        value = JSON.stringify(item);
      }

      data.push({
        value,
        projectId,
        // @ts-ignore
        level,
        deleteDate: new Date(date.setDate(date.getDate() + user.plan.storingDays))
      });
    }
  }

  // @ts-ignore
  await prisma.log.createMany({ data });
  
  console.log('Logs seed');
}
