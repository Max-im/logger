import { User } from '@prisma/client';
export interface IAuth {
  email: string;
  name: string;
  photo: string;
}

export type AuthCode = 200 | 201;

export interface IAuthResponse {
  token: string;
  user: User;
}