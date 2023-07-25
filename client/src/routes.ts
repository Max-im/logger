import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import { Logout, RoleTypes } from './user';
import LogPage from './log';
import PlanPage from './plan';
import DocsPage from './documentation';
import ProjectsPage from './projects';
import ProjectPage from './project';
import ProjectSettingsPage from './project-settings';
import AboutPage from './about';
import NotFoundPage from './notfound';
import HomePage from './home';

// eslint-disable-next-line no-use-before-define
export interface IRoute extends IRouteData {
    element: typeof HomePage;
}

export interface IRouteData {
    url: string;
    title: string;
    subtitle: string;
    isMenu: boolean;
    role: number;
    icon: typeof HomeIcon;
    parrent: IRoute | null;
    rule: RegExp;
}

export const homeRoute = {
    url: '/',
    title: 'Home',
    subtitle: `Welcome to ${process.env.REACT_APP_NAME || 'App'}`,
    isMenu: true,
    role: RoleTypes.GUEST,
    element: HomePage,
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
    element: AboutPage,
    parrent: null,
    rule: /^\/about$/,
    icon: InfoIcon,
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
    element: ProjectsPage,
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

export const projectSettingsRoute = {
    url: '/project/settings/:projectId',
    title: 'Project Settings',
    subtitle: 'Adjust your project',
    isMenu: false,
    role: RoleTypes.USER,
    element: ProjectSettingsPage,
    parrent: null,
    rule: /^\/project\/settings\/.{25}$/,
    icon: AccountTreeIcon,
};

export const docsRoute = {
    url: '/docs',
    title: 'Documentation',
    subtitle: 'Start in just a few clicks',
    isMenu: false,
    role: RoleTypes.GUEST,
    element: DocsPage,
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
    logoutRoute,
    projectsRoute,
    projectItemRoute,
    docsRoute,
    planRoute,
    logPageRoute,
    projectSettingsRoute,
    notFounRoute,
];
