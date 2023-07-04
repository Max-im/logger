import { AppDispatch } from '../../store/store';
import api from '../../services/http';
import { DEFAULT_ERROR_TEXT, GET_PLAN_URL } from '../../constants';
import { plantSlice } from './plan.slice';
import { IPlan } from '../model/plan.model';

export const getPlansAction = () => async (dispatch: AppDispatch) => {
    try {
        const response = await api.get<{ plans: IPlan[] }>(GET_PLAN_URL);
        dispatch(plantSlice.actions.get(response.data.plans));
    } catch (err) {
        const message = err.message || DEFAULT_ERROR_TEXT;
        console.log(message);
    }
};
