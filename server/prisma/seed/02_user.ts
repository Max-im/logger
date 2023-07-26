import { PrismaClient, RoleTypes, Log, LogLevel, PlanTypes } from '@prisma/client';
import { createId } from '@paralleldrive/cuid2';

const prisma = new PrismaClient();

const userId = createId();

// @ts-ignore
const email = <string>process.env.SEED_ADMIN_EMAIL;
// @ts-ignore
const name = <string>process.env.SEED_ADMIN_NAME;
// @ts-ignore
const photo = <string>process.env.SEED_ADMIN_PHOTO;

export async function seedUsers() {
    console.log('User start seeding');

    const freePlan = await prisma.plan.findUnique({ where: { name: PlanTypes.FREE } });
    const adminRole = await prisma.role.findUnique({ where: { type: RoleTypes.ADMIN } });

    await prisma.user.upsert({
    // @ts-ignore
        where: { email },
        update: {},
        create: {
            id: userId,
            email,
            name,
            photo,
            planId: freePlan!.id,
            roleId: adminRole!.id,
        },
    });

    console.log('User seed');
}
