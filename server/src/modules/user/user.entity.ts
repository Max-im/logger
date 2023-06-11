import { Role } from '@prisma/client';
import { UserRepo } from './user.repo';
import { AuthCode, IAuth, IAuthData, IUser } from './user.types';

export class UserEntity implements IUser {
  id: number;
  email: string;
  name: string;
  photo: string;
  role: Role;
  projects: any[];

  constructor(user: IUser) {
    this.id = user.id;
    this.email = user.email;
    this.name = user.name;
    this.photo = user.photo;
    this.role = user.role;
    this.projects = user.projects || [];
  }

  static async findById(id: number) {
    const user = await UserRepo.findById(id);
    return new UserEntity(user);
  }

  static async auth(userData: IAuth): Promise<IAuthData> {
    let userItem: null | IUser = await UserRepo.findByEmail(userData.email);
    const statusCode: AuthCode = userItem ? 200 : 201;

    if (!userItem) {
      userItem = await UserRepo.create(userData);
    }
    
    const user = new UserEntity(userItem);

    return { statusCode, user };
  }
}