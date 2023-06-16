export enum RoleTypes {
  GUEST = 0,
  USER = 1,
  ADMIN = 2
};

export interface IUser {
  id: string;
  name: string;
  email: string;
  photo: string;
  role: RoleTypes;
};

export interface IUserAuth {
  user: IUser;
  token: string;
};