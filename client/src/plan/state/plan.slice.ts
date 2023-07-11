import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPlan } from '../model/plan.model';

interface PlanState {
    plans: IPlan[];
    loaded: boolean;
}

const initialState: PlanState = {
    plans: [],
    loaded: false,
};

export const plantSlice = createSlice({
    name: 'plan',
    initialState,
    reducers: {
        get(state, action: PayloadAction<IPlan[]>) {
            state.plans = action.payload;
            state.loaded = true;
        },
    },
});

export default plantSlice.reducer;
