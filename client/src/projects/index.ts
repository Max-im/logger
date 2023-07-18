import { lazy } from 'react';

const ProjectsPage = lazy(() => import('./page/ProjectsPage'));

export default ProjectsPage;
export { default as projectReducer } from './state/projects.slice';
