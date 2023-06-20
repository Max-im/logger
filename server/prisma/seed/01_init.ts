import { PrismaClient, RoleTypes, PlanTypes } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedRoles() {
  console.log('Roles start seeding');

  await prisma.role.upsert({ 
    where: {type: RoleTypes.USER},
    update: {},
    create: {type: RoleTypes.USER, description: 'user'}
  });
  
  await prisma.role.upsert({ 
    where: {type: RoleTypes.ADMIN},
    update: {},
    create: {type: RoleTypes.ADMIN, description: 'admin'}
  });

  console.log('Roles seed');
}

export async function seedPlans() {
  console.log('Plans start seeding');

  await prisma.plan.upsert({ 
    where: {name: PlanTypes.FREE},
    update: {},
    create: {name: PlanTypes.FREE, projectsNum: 3, cost: 0, storingDays: 3}
  });
  
  await prisma.plan.upsert({ 
    where: {name: PlanTypes.BASIC},
    update: {},
    create: {name: PlanTypes.BASIC, projectsNum: 10, cost: 2, storingDays: 14},
  });
  
  await prisma.plan.upsert({ 
    where: {name: PlanTypes.STANDART},
    update: {},
    create: {name: PlanTypes.STANDART, projectsNum: 15, cost: 5, storingDays: 30},
  });

  await prisma.plan.upsert({ 
    where: {name: PlanTypes.VIP},
    update: {},
    create: {name: PlanTypes.VIP, projectsNum: 50, cost: 20, storingDays: 365},
  });

  console.log('Plans seed');
}
