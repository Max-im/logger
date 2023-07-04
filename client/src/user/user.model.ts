export enum RoleTypes {
  // eslint-disable-next-line
  GUEST = 0,
  // eslint-disable-next-line
  USER = 1,
  // eslint-disable-next-line
  ADMIN = 2
}

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
