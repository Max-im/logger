import { PrismaClient, RoleTypes, PlanTypes } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedRoles() {
  console.log('Roles start seeding');

  const roles = [
    {type: RoleTypes.USER, description: 'user'},
    {type: RoleTypes.ADMIN, description: 'admin'},
  ]

  await prisma.role.createMany({data: roles});

  console.log('Roles seed');
}

export async function seedPlans() {
  console.log('Plans start seeding');

  const plans = [
    {name: PlanTypes.FREE, projectsNum: 3, cost: 0, storingDays: 3},
    {name: PlanTypes.BASIC, projectsNum: 10, cost: 2, storingDays: 14},
  ]

  await prisma.plan.createMany({ data: plans });

  console.log('Plans seed');
}
