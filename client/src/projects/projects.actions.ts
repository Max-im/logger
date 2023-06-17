import { AppDispatch } from '../store/store';
import api from '../services/http';
import { CREATE_PROJECT_URL, DEFAULT_ERROR_TEXT } from '../constants';
import { ICreateProjectResponse, IProject, IProjectInput } from './projects.model';
import {projectSlice} from './projects.slice'

export const createProjectAction = (onCreateProjectData: IProjectInput, cb: Function) => async (dispatch: AppDispatch) => {
  try {
    const response = await api.post<ICreateProjectResponse>(CREATE_PROJECT_URL, onCreateProjectData);
    dispatch(projectSlice.actions.add([response.data.project]));
  } catch (err) {
    const message = err.message || DEFAULT_ERROR_TEXT;
    cb(message);
  }
};

export const getProjectsAction = (cb: Function) => async (dispatch: AppDispatch) => {
  try {
    const response = await api.get<{projects: IProject[]}>(CREATE_PROJECT_URL);
    dispatch(projectSlice.actions.add(response.data.projects));
  } catch (err) {
    const message = err.message || DEFAULT_ERROR_TEXT;
    cb(message);
  }
};

export const deleteProjectAction = (id: number, cb: Function) => async (dispatch: AppDispatch) => {
  try {
    await api.delete(`${CREATE_PROJECT_URL}/${id}`);
    dispatch(projectSlice.actions.delete(id));
  } catch (err) {
    const message = err.message || DEFAULT_ERROR_TEXT;
    cb(message);
  }
};
