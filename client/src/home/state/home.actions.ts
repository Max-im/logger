import { AppDispatch } from '../../store/store';
import api from '../../services/http';
import { DEFAULT_ERROR_TEXT, STATUS_URL } from '../../constants';
import { HomeState, homeSlice } from './home.slice';

// eslint-disable-next-line no-unused-vars
type cb = (msg: string) => void;

export const initAction = (cb: cb) => async (dispatch: AppDispatch) => {
    try {
        const response = await api.get<Omit<HomeState, 'loaded'>>(STATUS_URL);
        dispatch(homeSlice.actions.init(response.data));
    } catch (err) {
        const message = err.message || DEFAULT_ERROR_TEXT;
        cb(message);
    }
};
