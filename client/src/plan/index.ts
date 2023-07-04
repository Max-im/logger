import { lazy } from 'react';

const PlanPage = lazy(() => import('./page/plan.page'));

export { default as PlanWidget } from './widgets/plan.widget';
export { default as planReducer } from './state/plan.slice';
export { getPlansAction } from './state/plan.actions';

export default PlanPage;
