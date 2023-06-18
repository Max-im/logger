import { AppDispatch } from '../store/store';
import api from '../services/http';
import { DEFAULT_ERROR_TEXT, GET_LOGS_URL } from '../constants';
import { ILog } from '../log/log.model';
import { logSlice } from '../log/log.slice';

type cb = (msg: string) => void;

export const getLogsAction = (projectId: string, cb: cb) => async (dispatch: AppDispatch) => {
  try {
    const response = await api.get<{logs: ILog[]}>(`${GET_LOGS_URL}/${projectId}`);
    dispatch(logSlice.actions.get(response.data.logs));
  } catch (err) {
    const message = err.message || DEFAULT_ERROR_TEXT;
    cb(message);
  }
};

export const selectAction = (id: string, val: boolean) => (dispatch: AppDispatch) => {
  dispatch(logSlice.actions.select({ id, val }));
};
