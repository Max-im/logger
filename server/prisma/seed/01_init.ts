import { PrismaClient, RoleTypes, PlanTypes } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedRoles() {
    console.log('Roles start seeding');

    await prisma.role.upsert({
        where: { type: RoleTypes.USER },
        update: {},
        create: { type: RoleTypes.USER, description: 'user' }
    });

    await prisma.role.upsert({
        where: { type: RoleTypes.ADMIN },
        update: {},
        create: { type: RoleTypes.ADMIN, description: 'admin' }
    });

    console.log('Roles seed');
}

export async function seedPlans() {
    console.log('Plans start seeding');

    await prisma.plan.upsert({
        where: { id: 1 },
        update: {},
        create: { id: 1, name: PlanTypes.FREE, projectsNum: 3, cost: 0, storingDays: 3 }
    });

    await prisma.plan.upsert({
        where: { id: 2 },
        update: {},
        create: { id: 2, name: PlanTypes.BASIC, projectsNum: 10, cost: 2, storingDays: 14 },
    });

    await prisma.plan.upsert({
        where: { id: 3 },
        update: {},
        create: { id: 3, name: PlanTypes.STANDART, projectsNum: 15, cost: 5, storingDays: 30 },
    });

    await prisma.plan.upsert({
        where: { id: 4 },
        update: {},
        create: { id: 4, name: PlanTypes.VIP, projectsNum: 50, cost: 20, storingDays: 365 },
    });

    console.log('Plans seed');
}
