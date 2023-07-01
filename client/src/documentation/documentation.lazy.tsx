import { lazy } from 'react';

const DocsLazy = lazy(() => import('./documentation.page'));

export default DocsLazy;