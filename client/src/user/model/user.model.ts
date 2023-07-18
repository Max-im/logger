/* eslint-disable */
export enum RoleTypes {
  GUEST = 0,
  USER = 1,
  ADMIN = 2
}
/* eslint-enable */

export interface IUser {
  id: string;
  name: string;
  email: string;
  photo: string;
  role: RoleTypes;
  planId: number;
}

export interface IUserAuth {
  user: IUser;
  token: string;
}
