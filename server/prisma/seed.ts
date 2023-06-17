import { PrismaClient, RoleTypes, Log, LogLevel } from '@prisma/client';
import { createId } from '@paralleldrive/cuid2';

const prisma = new PrismaClient()

async function seedUsers() {
  console.log('User start seeding');

  await prisma.role.upsert({
    where: { type: RoleTypes.USER },
    update: {},
    create: {
      description: 'User mode',
      type: RoleTypes.USER
    },
  });

  await prisma.user.upsert({
    where: { email: 'pogidaevmo@gmail.com' },
    update: {},
    create: {
      id: 'cliz2cqo6000208kuc4sq8wtb',
      email: 'pogidaevmo@gmail.com',
      name: 'Maksym',
      photo: 'https://lh3.googleusercontent.com/a/AAcHTtdj_AWOYAEx553u4dChujkQmN3WJzlUVESqQ4we5g=s96-c',
      role: {
        connectOrCreate: {where: {
          type: RoleTypes.ADMIN,
        },
        create: {
          description: 'Admin mode',
          type: RoleTypes.ADMIN
        },}
      }
    },
  });

  console.log('User seed');
}

async function seedLogs() {
  console.log('Logs start seeding');


  const logsMap = {
    [LogLevel.FATAL]: 50,
    [LogLevel.ERROR]: 50,
    [LogLevel.WARN]: 20,
    [LogLevel.DEBUG]: 10,
    [LogLevel.INFO]: 30,
  }

  const data: Log[] = [];

  for(const level in logsMap) {
    const arr = new Array(logsMap[level]).fill('lorem ipsum');
    for (const i of arr) {
      data.push({
        id: createId(),
        value: i,
        projectId: 'clj07c8dy0000vl7opegkmsps',
        // @ts-ignore
        level
      });
    }
  }

  // @ts-ignore
  await prisma.log.createMany({ data });
  
  console.log('Logs seed');
}

Promise.all([seedUsers(), seedLogs()])
  .catch(async (e) => {
    console.error(e);
    // @ts-ignore
    process.exit(1);
  }).finally(async () => {
    await prisma.$disconnect();
  });
