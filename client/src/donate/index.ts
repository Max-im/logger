import { lazy } from 'react';

const DonatePage = lazy(() => import('./page/Donate'));

export default DonatePage;
export { default as DonateWidget } from './widgets/DonateWidget';
