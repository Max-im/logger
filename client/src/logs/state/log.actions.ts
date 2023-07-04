import { AppDispatch } from '../../store/store';
import api from '../../services/http';
import { DEFAULT_ERROR_TEXT, GET_LOGS_URL } from '../../constants';
import { ILevels, ILog } from '../model/log.model';
import { logSlice } from './log.slice';

// eslint-disable-next-line no-unused-vars
type cb = (msg: string) => void;
interface IGetLogsAction {
    projectId: string;
    skip: number;
    filterVal: string | null;
    cb: cb
}

export const getLogsAction = (params: IGetLogsAction) => async (dispatch: AppDispatch) => {
    const {
        projectId, skip, filterVal, cb,
    } = params;
    const step = 20;
    const filter = filterVal ? `&filter=${filterVal}` : '';
    type IGetLogs = { logs: ILog[] };

    try {
        const response = await api.get<IGetLogs>(`${GET_LOGS_URL}/${projectId}?take=${step}&skip=${skip}${filter}`);
        dispatch(logSlice.actions.get(response.data.logs));
    } catch (err) {
        const message = err.message || DEFAULT_ERROR_TEXT;
        cb(message);
    }
};

export const resetLogsAction = () => async (dispatch: AppDispatch) => {
    setTimeout(() => dispatch(logSlice.actions.resetLogs()), 500);
};

interface IInfoItem {
    level: ILevels;
    _count: {
        level: number
    }
}

export const getLogsInfoAction = (projectId: string, cb: cb) => async (dispatch: AppDispatch) => {
    try {
        // eslint-disable-next-line no-unused-vars
        const info: { [key in ILevels]?: number } = {};

        const response = await api.get<{ info: IInfoItem[] }>(`${GET_LOGS_URL}/${projectId}/info`);

        response.data.info.forEach((item) => {
            info[item.level] = Number(item._count.level);
        });

        dispatch(logSlice.actions.addInfo({ info }));
    } catch (err) {
        const message = err.message || DEFAULT_ERROR_TEXT;
        cb(message);
    }
};

export const readLogAction = (projectId: string, logId: string) => async (dispatch: AppDispatch) => {
    try {
        await api.get(`${GET_LOGS_URL}/${projectId}/${logId}`);
        dispatch(logSlice.actions.markRead({ id: logId }));
    } catch (err) {
        const message = err.message || DEFAULT_ERROR_TEXT;
        console.log(message);
    }
};

export const deleteLogsAction = (projectId: string, logIds: string[]) => async (dispatch: AppDispatch) => {
    try {
        await api.delete(`${GET_LOGS_URL}/${projectId}/${logIds.join(',')}`);
        dispatch(logSlice.actions.delete({ logIds }));
    } catch (err) {
        const message = err.message || DEFAULT_ERROR_TEXT;
        console.log(message);
    }
};

export const selectAction = (id: string, val: boolean) => (dispatch: AppDispatch) => {
    dispatch(logSlice.actions.select({ id, val }));
};

export const selectAllAction = (val: boolean) => (dispatch: AppDispatch) => {
    dispatch(logSlice.actions.selectAll(val));
};

export const clearLogsAction = () => (dispatch: AppDispatch) => {
    dispatch(logSlice.actions.clearLogs());
};
