import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILog } from './log.model';

interface LogState {
    logs: {[id: string]: ILog};
    selected: {[id: string]: boolean}
}

const initialState: LogState = {
    logs: {},
    selected: {}
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
        },
        select(state, action: PayloadAction<{id: string, val: boolean}>) {
            state.selected[action.payload.id] = action.payload.val;
        },   
        markRead(state, action: PayloadAction<{id: string}>) {
            state.logs[action.payload.id].opened = true;
        },
        delete(state, action: PayloadAction<{logIds: string[]}>) {
            action.payload.logIds.forEach(id => {
                delete state.logs[id];
            });
        },
    }
})

export default logSlice.reducer;