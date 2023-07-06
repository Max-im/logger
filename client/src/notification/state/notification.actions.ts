import { AppDispatch } from '../../store/store';
import api from '../../services/http';
import { DEFAULT_ERROR_TEXT, GET_NOTIFICATIONS_URL } from '../../constants';
import { notificationSlice } from './notification.slice';
import { INotification } from '../model/notification.model';

// eslint-disable-next-line no-unused-vars
type cb = (msg: string) => void;

export const getNotificationsAction = (projectId: string, cb: cb) => async (dispatch: AppDispatch) => {
    try {
        const response = await api.get<{ notifications: INotification[] }>(`${GET_NOTIFICATIONS_URL}/${projectId}`);
        dispatch(notificationSlice.actions.get(response.data.notifications));
    } catch (err) {
        const message = err.message || DEFAULT_ERROR_TEXT;
        cb(message);
    }
};

export const createNotificationAction = (projectId: string, level: string, cb: cb) => async (dispatch: AppDispatch) => {
    try {
        const response = await api.post<{ notification: INotification }>(GET_NOTIFICATIONS_URL, { level, projectId });
        dispatch(notificationSlice.actions.add(response.data.notification));
    } catch (err) {
        const message = err.message || DEFAULT_ERROR_TEXT;
        cb(message);
    }
};

interface IDleleteNotificationParams {
    id: number;
    projectId: string;
    cb: cb
}

export const deleteNotificationAction = (params: IDleleteNotificationParams) => async (dispatch: AppDispatch) => {
    const {
        id, projectId, cb,
    } = params;

    try {
        await api.delete(`${GET_NOTIFICATIONS_URL}/${projectId}/${id}`);
        console.log(id, 'aaaaaaaaaaaaaaaaaaaaaaaaaa');
        dispatch(notificationSlice.actions.onDelete(id));
    } catch (err) {
        const message = err.message || DEFAULT_ERROR_TEXT;
        cb(message);
    }
};
