import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// @ts-ignore
const email = <string>process.env.SEED_ADMIN_EMAIL

export async function seedProjects() {
  console.log('Projects start seeding');

  const user = await prisma.user.findUnique({where: { email }, include: {projects: true}});

  if (user?.projects.length === 0) {
      await prisma.project.create({
          data: {title: 'FIRST PROJECT', users: {create: [{ userId: user.id }]}}
      });
  }

  console.log('Projects seed');
}
