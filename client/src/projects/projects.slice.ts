import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../models/User';
import { setAuthHeader } from '../services/http';
import jwtDecode from 'jwt-decode';
import { AUTH_LOCAL_VAR } from '../constants';
import { IProject } from './projects.model';

interface ProjectState {
    projects: IProject[];
    ids: {[key: number]: true};
}

const initialState: ProjectState = {
    projects: [],
    ids: {}
}

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        add(state, action: PayloadAction<IProject[]>) {
            for (const project of action.payload) {
                if (!state.ids[project.id]) {
                    state.ids[project.id] = true;
                    state.projects.push(project);
                }
            }
        },
        create(state, action: PayloadAction<IProject>) {
            state.projects.push(action.payload);
        },
        delete(state, action: PayloadAction<number>) {
            state.projects = state.projects.filter(project => project.id !== action.payload);
        },
    }
})

export default projectSlice.reducer;