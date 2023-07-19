import { lazy } from 'react';

const PlanPage = lazy(() => import('./page/PlanPage'));

export { default as PlanWidget } from './widgets/PlanWidget';
export { default as planReducer } from './state/plan.slice';
export { getPlansAction } from './state/plan.actions';

export default PlanPage;
