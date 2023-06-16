import UserPage from './user/user.page';
import About from './about/about.page';
import Home from './home/home.page';
import Logout from './user/user.logout';
import Projects from './projects/projects.page';
import { RoleTypes } from './models/User';
import NotFoundPage from './notfound/notfound.page';
import Faq from './faq/faq.page';
import HomeIcon from '@mui/icons-material/Home';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import InfoIcon from '@mui/icons-material/Info';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ProjectItem from './projects/project-item.page';

export interface IRouteData {
  url: string;
  title: string;
  subtitle: string;
  isMenu: boolean;
  role: number;
  icon: typeof HomeIcon;
  parrent: IRoute | null;
  
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
  icon: HomeIcon
};

export const aboutRoute = {
  url: '/about',
  title: 'About',
  subtitle: `Information about ${process.env.REACT_APP_NAME} app`,
  isMenu: true,
  role: RoleTypes.GUEST,
  element: About,
  parrent: null,
  icon: InfoIcon
};

export const userRoute = {
  url: '/user',
  title: 'User',
  subtitle: 'User page',
  isMenu: false,
  role: RoleTypes.USER,
  element: UserPage,
  parrent: null,
  icon: HomeIcon
};

export const logoutRoute = {
  url: '/logout',
  title: 'Logout',
  subtitle: 'See you',
  isMenu: false,
  role: RoleTypes.USER,
  element: Logout,
  parrent: null,
  icon: HomeIcon
};

export const projectsRoute = {
  url: '/projects',
  title: 'Projects',
  subtitle: 'Information about your projects',
  isMenu: true,
  role: RoleTypes.USER,
  element: Projects,
  parrent: null,
  icon: AccountTreeIcon
};

export const projectItemRoute = {
  url: '/projects/:key',
  title: 'Project',
  subtitle: 'Project Information',
  isMenu: false,
  role: RoleTypes.USER,
  element: ProjectItem,
  parrent: null,
  icon: AccountTreeIcon
};

export const faqRoute = {
  url: '/faq',
  title: 'FAQ',
  subtitle: 'Questions and Answers',
  isMenu: true,
  role: RoleTypes.GUEST,
  element: Faq,
  parrent: null,
  icon: HelpCenterIcon
};

export const notFounRoute = {
  url: '*',
  title: 'Not Found',
  subtitle: 'Ooops, the page is not found',
  isMenu: false,
  role: RoleTypes.GUEST,
  element: NotFoundPage,
  parrent: null,
  icon: HomeIcon
};

export const routes = [
  homeRoute,
  aboutRoute,
  userRoute,
  logoutRoute,
  projectsRoute,
  projectItemRoute,
  faqRoute,
  notFounRoute,
];
