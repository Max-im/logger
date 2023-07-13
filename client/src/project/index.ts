import { lazy } from 'react';

const ProjectPage = lazy(() => import('./page/ProjectPage'));

export default ProjectPage;
export { default as ProjectKey } from './components/project-key';
