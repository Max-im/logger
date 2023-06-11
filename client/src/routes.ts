import UserPage from './user/user.page';
import About from './about/about.page';
import Home from './home/home.page';
import Logout from './user/user.logout';
import Projects from './prjects/projects.page';
import { RolesMap } from './models/User';
import NotFoundPage from './notfound/notfound.page';

export interface IRoute {
  url: string;
  title: string;
  isMainMenu: boolean;
  isUserMenu: boolean;
  role: number;
  element: () => JSX.Element;
  parrent: IRoute | null;
}

export const homeRoute = {
  url: '/',
  title: 'Home',
  isMainMenu: true,
  isUserMenu: false,
  role: RolesMap.GUEST,
  element: Home,
  parrent: null,
};

export const aboutRoute = {
  url: '/about',
  title: 'About',
  isMainMenu: true,
  isUserMenu: false,
  role: RolesMap.GUEST,
  element: About,
  parrent: null,
};

export const userRoute = {
  url: '/user',
  title: 'User',
  isMainMenu: false,
  isUserMenu: true,
  role: RolesMap.USER,
  element: UserPage,
  parrent: null,
};

export const logoutRoute = {
  url: '/logout',
  title: 'Logout',
  isMainMenu: false,
  isUserMenu: true,
  role: RolesMap.USER,
  element: Logout,
  parrent: null,
};

export const projectsRoute = {
  url: '/projects',
  title: 'Projects',
  isMainMenu: true,
  isUserMenu: false,
  role: RolesMap.USER,
  element: Projects,
  parrent: null,
};

export const notFounRoute = {
  url: '*',
  title: 'Not Found',
  isMainMenu: false,
  isUserMenu: false,
  role: RolesMap.GUEST,
  element: NotFoundPage,
  parrent: null,
};

export const routes = [
  homeRoute,
  aboutRoute,
  userRoute,
  logoutRoute,
  projectsRoute,
  notFounRoute,
];

export const menuRoutes = routes.filter((item) => item.isMainMenu);
export const userMenuRoutes = routes.filter((item) => item.isUserMenu);