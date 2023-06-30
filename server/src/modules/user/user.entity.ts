import { PlanTypes, User } from '@prisma/client';
import { UserRepo } from './user.repo';
import { AuthCode, IAuth } from './user.types';

export class UserEntity implements User {
  id: string;
  email: string;
  name: string;
  photo: string;
  roleId: number;
  planId: number;
  registred: Date;

  constructor(user: User) {
    this.id = user.id;
    this.email = user.email;
    this.name = user.name;
    this.photo = user.photo;
    this.roleId = user.roleId;
    this.registred = user.registred;
    this.planId = user.planId;
  }

  static async findById(id: string) {
    const user = await UserRepo.findById(id);
    return new UserEntity(user);
  }

  static async auth(userData: IAuth): Promise<{ statusCode: AuthCode, user: UserEntity }> {
    let userItem: null | User = await UserRepo.findByEmail(userData.email);
    const statusCode: AuthCode = userItem ? 200 : 201;

    if (!userItem) {
      userItem = await UserRepo.create(userData);
    }

    const user = new UserEntity(userItem);

    return { statusCode, user };
  }
}