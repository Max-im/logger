import UserPage from './user/user.page';
import About from './about/about.page';
import Home from './home/home.page';
import Logout from './user/user.logout';
import Projects from './projects/projects.page';
import NotFoundPage from './notfound/notfound.page';
import Documentation from './documentation/documentation.page';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import ProjectPage from './projects/project.page';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import { RoleTypes } from './user/user.model';
import PlanPage from './plan/plan.page';
import LogPage from './log/log.page';

export interface IRouteData {
  url: string;
  title: string;
  subtitle: string;
  isMenu: boolean;
  role: number;
  icon: typeof HomeIcon;
  parrent: IRoute | null;
  rule: RegExp
  
}
export interface IRoute extends IRouteData {
  element: typeof Home;
}

export const homeRoute = {
  url: '/',
  title: 'Home',
  subtitle: `Welcome to ${process.env.REACT_APP_NAME}`,
  isMenu: true,
  role: RoleTypes.GUEST,
  element: Home,
  parrent: null,
  rule: /^\/$/,
  icon: HomeIcon,
};

export const aboutRoute = {
  url: '/about',
  title: 'About',
  subtitle: `Information about ${process.env.REACT_APP_NAME} app`,
  isMenu: true,
  role: RoleTypes.GUEST,
  element: About,
  parrent: null,
  rule: /^\/about$/,
  icon: InfoIcon,
};

export const userRoute = {
  url: '/user',
  title: 'User',
  subtitle: 'User page',
  isMenu: false,
  role: RoleTypes.USER,
  element: UserPage,
  parrent: null,
  rule: /^\/user$/,
  icon: HomeIcon,
};

export const logoutRoute = {
  url: '/logout',
  title: 'Logout',
  subtitle: 'See you',
  isMenu: false,
  role: RoleTypes.USER,
  element: Logout,
  parrent: null,
  rule: /^\/logout$/,
  icon: HomeIcon,
};

export const projectsRoute = {
  url: '/project',
  title: 'Projects',
  subtitle: 'Information about your projects',
  isMenu: true,
  role: RoleTypes.USER,
  element: Projects,
  parrent: null,
  rule: /^\/project$/,
  icon: AccountTreeIcon,
};

export const logPageRoute = {
  url: '/project/:projectId/log/:logId',
  title: 'Log',
  subtitle: 'The log information',
  isMenu: false,
  role: RoleTypes.USER,
  element: LogPage,
  parrent: null,
  rule: /^\/project\/.{25}\/log\/.+$/,
  icon: TroubleshootIcon,
};

export const projectItemRoute = {
  url: '/project/:projectId',
  title: 'Project',
  subtitle: 'Project Information',
  isMenu: false,
  role: RoleTypes.USER,
  element: ProjectPage,
  parrent: null,
  rule: /^\/project\/.{25}$/,
  icon: AccountTreeIcon,
};

export const docsRoute = {
  url: '/docs',
  title: 'Documentation',
  subtitle: 'Start in just a few clicks',
  isMenu: true,
  role: RoleTypes.GUEST,
  element: Documentation,
  parrent: null,
  rule: /^\/docs$/,
  icon: ImportContactsIcon,
};

export const planRoute = {
  url: '/plan',
  title: 'Plans',
  subtitle: 'Please check a plan for you',
  isMenu: true,
  role: RoleTypes.GUEST,
  element: PlanPage,
  parrent: null,
  rule: /^\/plan$/,
  icon: AttachMoneyIcon,
};

export const notFounRoute = {
  url: '*',
  title: 'Not Found',
  subtitle: 'Ooops, the page is not found',
  isMenu: false,
  role: RoleTypes.GUEST,
  element: NotFoundPage,
  parrent: null,
  rule: /^\/.*$/,
  icon: HomeIcon,

};

export const routes = [
  homeRoute,
  aboutRoute,
  userRoute,
  logoutRoute,
  projectsRoute,
  projectItemRoute,
  docsRoute,
  planRoute,
  logPageRoute,
  notFounRoute,
];
