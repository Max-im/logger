import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function seedUsers() {
  console.log('User start seeding');

  await prisma.user.upsert({
    where: { email: 'pogidaevmo@gmail.com' },
    update: {},
    create: {
      id: 1,
      email: 'pogidaevmo@gmail.com',
      name: 'Maksym',
      role: 'ADMIN',
      photo: 'https://lh3.googleusercontent.com/a/AAcHTtdj_AWOYAEx553u4dChujkQmN3WJzlUVESqQ4we5g=s96-c'
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
