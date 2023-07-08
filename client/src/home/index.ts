import { lazy } from 'react';

const HomePage = lazy(() => import('./page/Home'));

export default HomePage;
export { default as homeReducer } from './state/home.slice';
