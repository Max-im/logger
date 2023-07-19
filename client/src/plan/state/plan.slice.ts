import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPlan } from '../model/plan.model';

interface PlanState {
    plans: IPlan[];
    loaded: boolean;
    error: string | null;
}

const initialState: PlanState = {
    plans: [],
    loaded: false,
    error: null,
};

export const plantSlice = createSlice({
    name: 'plan',
    initialState,
    reducers: {
        get(state, action: PayloadAction<IPlan[]>) {
            state.plans = action.payload;
            state.loaded = true;
        },
        onError(state, action: PayloadAction<string>) {
            state.plans = [];
            state.loaded = false;
            state.error = action.payload;
        },
    },
});

export default plantSlice.reducer;
