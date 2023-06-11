export const RolesMap = {
  GUEST: 0,
  USER: 1,
  ADMIN: 2
};

type RoleNames = 'GUEST' | 'USER' | 'ADMIN';

export interface IUser {
  id: string;
  name: string;
  email: string;
  photo: string;
  role: RoleNames;
};

export interface IUserAuth {
  user: IUser;
  token: string;
};