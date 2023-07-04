import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface HomeState {
    loaded: boolean;
    projects: number
    users: number
}

const initialState: HomeState = {
    loaded: false,
    projects: 0,
    users: 0,
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
    },
});

export default homeSlice.reducer;
