import { Role } from '@prisma/client';

export interface IUser {
  id: number;
  email: string;
  name: string;
  photo: string;
  role: Role
  projects?: any[]
}

export interface IAuth {
  email: string;
  name: string;
  photo: string;
}

export type AuthCode = 200 | 201;

export interface IAuthData {
  statusCode: AuthCode;
  user: IUserEntity;
}

export interface IAuthResponse {
  token: string;
  user: IUser;
}