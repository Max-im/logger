import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILog } from './log.model';

interface LogState {
    logs: {string: ILog};
}

const initialState: LogState = {
    logs: {},
}

export const logSlice = createSlice({
    name: 'log',
    initialState,
    reducers: {
        get(state, action: PayloadAction<ILog[]>) {
            for (const log of action.payload) {
                if (!state.ids[log.id]) {
                    state.ids[project.id] = true;
                    state.logs.push(log);
                }
            }
            // state.logs.push(...action.payload);
        }    
    }
})

export default logSlice.reducer;