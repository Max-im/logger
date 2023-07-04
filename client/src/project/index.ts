import { lazy } from 'react';

const ProjectPage = lazy(() => import('./page/project.page'));

export default ProjectPage;
export { default as ProjectKey } from './components/project-key';
