import { Prisma, RoleTypes } from '@prisma/client';
import { prisma } from '../../util/db';
import { ErrorUserNotFound } from '../errors/error.usernotfound';
import { IAuth } from './user.types';

export class UserRepo {
  static async findById(id: string) {
    try {
      return await prisma.user.findUniqueOrThrow({where: { id }, include: { role: true }})
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        throw new ErrorUserNotFound();
      }
      throw err;
    }
  }

  static async findByEmail(email: string) {
      return await prisma.user.findUnique({where: { email }, include: {role: true}})
  }
  
  static async create({email, name, photo}: IAuth) {
    try {
      return await prisma.user.create({ 
        data: { email, name, photo, role: {connect: {type: RoleTypes.USER}}, projects: {}}, 
        include: {role: true}
      });
    } catch (err) {
      throw err;
    }
  }
}
