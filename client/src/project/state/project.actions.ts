import { AppDispatch } from '../../store/store';
import api from '../../services/http';
import { PROJECT_URL, DEFAULT_ERROR_TEXT } from '../../constants';
import { ICreateProjectResponse, IProject } from '../model/projects.model';
import { projectSlice } from './projects.slice';
import { apiErrorHandler } from '../../shared/errorHandler';

// eslint-disable-next-line no-unused-vars
type cb = (msg: string) => void;

export const createProjectAction = (title: string, cb: cb) => async (dispatch: AppDispatch) => {
    try {
        const response = await api.post<ICreateProjectResponse>(PROJECT_URL, { title });
        dispatch(projectSlice.actions.add([response.data.project]));
    } catch (err) {
        const message = err.message || DEFAULT_ERROR_TEXT;
        cb(message);
    }
};

export const deleteProjectAction = (id: string, cb: cb) => async (dispatch: AppDispatch) => {
    try {
        await api.delete(`${PROJECT_URL}/${id}`);
        dispatch(projectSlice.actions.delete(id));
        // dispatch(logSlice.actions.clearLogs());
    } catch (err) {
        const message = err.message || DEFAULT_ERROR_TEXT;
        cb(message);
    }
};

export const getCurrentProjectAction = (projectId: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await api.get<{ project: IProject }>(`${PROJECT_URL}/${projectId}`);
        dispatch(projectSlice.actions.setCurrent(response.data.project));
    } catch (err) {
        const message = apiErrorHandler(err);
        dispatch(projectSlice.actions.onError(message));
    }
};
