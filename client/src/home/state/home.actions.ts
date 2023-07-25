import { AppDispatch } from '../../store/store';
import api from '../../services/http';
import { STATUS_URL } from '../../constants';
import { HomeState, homeSlice } from './home.slice';
import { apiErrorHandler } from '../../shared/errorHandler';

export const initAction = () => async (dispatch: AppDispatch) => {
    try {
        const response = await api.get<Omit<HomeState, 'loaded'>>(STATUS_URL);
        dispatch(homeSlice.actions.init(response.data));
    } catch (err) {
        dispatch(homeSlice.actions.onError(apiErrorHandler(err)));
    }
};
