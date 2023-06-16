import { PrismaClient, RoleTypes } from '@prisma/client';

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

seedUsers()
  .catch(async (e) => {
    console.error(e);
    // @ts-ignore
    process.exit(1);
  }).finally(async () => {
    await prisma.$disconnect();
  });
