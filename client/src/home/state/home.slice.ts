import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface HomeState {
    loaded: boolean;
    projects: number;
    users: number;
    error: null | string;
}

const initialState: HomeState = {
    loaded: false,
    projects: 0,
    users: 0,
    error: null,
};

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        init(state, action: PayloadAction<Omit<HomeState, 'loaded'>>) {
            state.loaded = true;
            state.projects = action.payload.projects;
            state.users = action.payload.users;
        },
        onError(state, action: PayloadAction<string>) {
            state.loaded = false;
            state.error = action.payload;
        },
    },
});

export default homeSlice.reducer;
