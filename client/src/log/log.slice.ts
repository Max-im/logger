import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILog } from './log.model';

interface LogState {
    logs: {[id: string]: ILog};
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
                if (!state.logs[log.id]) {
                    log.created = new Date(log.created);
                    state.logs[log.id] = log;
                }
            }
        }    
    }
})

export default logSlice.reducer;