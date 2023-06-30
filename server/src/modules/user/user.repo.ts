import { PlanTypes, Prisma, RoleTypes } from '@prisma/client';
import { prisma } from '../../util/db';
import { ErrorUserNotFound } from '../errors/error.usernotfound';
import { IAuth } from './user.types';

export class UserRepo {
  static async findById(id: string) {
    try {
      return await prisma.user.findUniqueOrThrow({ where: { id }, include: { role: true, plan: true } })
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        throw new ErrorUserNotFound();
      }
      throw err;
    }
  }

  static async findByEmail(email: string) {
    return await prisma.user.findUnique({ where: { email }, include: { role: true, plan: true } })
  }

  static async create({ email, name, photo }: IAuth) {
    try {
      return await prisma.user.create({
        data: {
          email, name, photo, projects: {},
          plan: { connect: { name: PlanTypes.FREE } },
          role: { connect: { type: RoleTypes.USER } }
        },
        include: { role: true, plan: true }
      });
    } catch (err) {
      throw err;
    }
  }
}
