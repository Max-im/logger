import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProject } from '../model/projects.model';

interface ProjectState {
    projects: IProject[];
    ids: { [key: string]: true };
    currentProject: IProject | null;
    error: string | null;
}

const initialState: ProjectState = {
    projects: [],
    ids: {},
    currentProject: null,
    error: null,
};

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
        delete(state, action: PayloadAction<string>) {
            state.projects = state.projects.filter((project) => project.id !== action.payload);
        },
        setCurrent(state, action: PayloadAction<IProject>) {
            state.currentProject = action.payload;
        },
        clearCurrent(state) {
            state.currentProject = null;
        },
        onError(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
    },
});

export default projectSlice.reducer;
