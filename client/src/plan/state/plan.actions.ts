import { AppDispatch } from '../../store/store';
import api from '../../services/http';
import { GET_PLAN_URL } from '../../constants';
import { plantSlice } from './plan.slice';
import { IPlan } from '../model/plan.model';
import { apiErrorHandler } from '../../shared/errorHandler';

export const getPlansAction = () => async (dispatch: AppDispatch) => {
    try {
        const response = await api.get<{ plans: IPlan[] }>(GET_PLAN_URL);
        dispatch(plantSlice.actions.get(response.data.plans));
    } catch (err) {
        const message = apiErrorHandler(err);
        dispatch(plantSlice.actions.onError(message));
    }
};
