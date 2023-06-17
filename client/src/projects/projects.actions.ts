import { AppDispatch } from '../store/store';
import api from '../services/http';
import { PROJECT_URL, DEFAULT_ERROR_TEXT } from '../constants';
import { ICreateProjectResponse, IProject, IProjectInput } from './projects.model';
import {projectSlice} from './projects.slice'
import {useAppSelector} from '../hooks/redux';
import { StateFromReducersMapObject } from '@reduxjs/toolkit';

type cb = (msg: string) => void;


export const createProjectAction = (onCreateProjectData: IProjectInput, cb: cb) => async (dispatch: AppDispatch) => {
  try {
    const response = await api.post<ICreateProjectResponse>(PROJECT_URL, onCreateProjectData);
    dispatch(projectSlice.actions.add([response.data.project]));
  } catch (err) {
    const message = err.message || DEFAULT_ERROR_TEXT;
    cb(message);
  }
};

export const getProjectsAction = (cb: cb) => async (dispatch: AppDispatch) => {
  try {
    const response = await api.get<{projects: IProject[]}>(PROJECT_URL);
    dispatch(projectSlice.actions.add(response.data.projects));
  } catch (err) {
    const message = err.message || DEFAULT_ERROR_TEXT;
    cb(message);
  }
};


export const deleteProjectAction = (id: string, cb: cb) => async (dispatch: AppDispatch) => {
  try {
    await api.delete(`${PROJECT_URL}/${id}`);
    dispatch(projectSlice.actions.delete(id));
  } catch (err) {
    const message = err.message || DEFAULT_ERROR_TEXT;
    cb(message);
  }
};

export const getCurrentProjectAction = (projectId: string, cb: cb) => async (dispatch: AppDispatch, getState: () => any) => {
  try {
    const state = getState();
    const activeProject = state.projectReducer.projects.find((project: IProject) => project.id === projectId)
    if (activeProject) {
      dispatch(projectSlice.actions.setCurrent(activeProject));
    } else {
      const response = await api.get<{project: IProject}>(`${PROJECT_URL}/${projectId}`);
      dispatch(projectSlice.actions.setCurrent(response.data.project));
    }
  } catch (err) {
    const message = err.message || DEFAULT_ERROR_TEXT;
    cb(message);
  }
};
