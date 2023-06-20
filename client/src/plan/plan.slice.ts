import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPlan } from './plan.model';

interface PlanState {
    plans: IPlan[];
}

const initialState: PlanState = {
    plans: [],
}

export const plantSlice = createSlice({
    name: 'plan',
    initialState,
    reducers: {
        get(state, action: PayloadAction<IPlan[]>) {
            state.plans = action.payload;
        },
    }
})

export default plantSlice.reducer;