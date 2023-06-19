import { PrismaClient } from "@prisma/client";
import { seedPlans, seedRoles } from "./01_init";
import { seedLogs, seedUsers } from "./02_user";

const prisma = new PrismaClient();


Promise.all([seedRoles(), seedPlans(), /*seedUsers(), seedLogs()*/])
  .catch(async (e) => {
    console.error(e);
    // @ts-ignore
    process.exit(1);
  }).finally(async () => {
    await prisma.$disconnect();
  });