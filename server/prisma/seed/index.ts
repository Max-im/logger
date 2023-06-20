import env from 'dotenv';
env.config();

import { PrismaClient } from "@prisma/client";
import { seedPlans, seedRoles } from "./01_init";
import { seedUsers } from "./02_user";
import { seedProjects } from './03_project';
import { seedLogs } from './04_logs';

const prisma = new PrismaClient();

const seeds = [
  seedRoles,
  seedPlans,
  seedUsers, 
  seedProjects,
  seedLogs
];

(async function() {
  try {
    for (const seed of seeds) {
      await seed();
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
