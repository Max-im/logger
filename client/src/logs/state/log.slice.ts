import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILevels, ILog } from '../model/log.model';

/* eslint-disable */
interface LogState {
    logs: { [id: string]: ILog };
    selected: { [id: string]: boolean };
    info: { [level in ILevels]?: number };
    selectAll: boolean;
    error: null | string;
}
/* eslint-enable */

const initialState: LogState = {
    logs: {},
    selected: {},
    info: {},
    selectAll: false,
    error: null,
};

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
        // eslint-disable-next-line no-unused-vars
        addInfo(state, action: PayloadAction<{ info: { [key in ILevels]?: number } }>) {
            state.info = action.payload.info;
        },
        select(state, action: PayloadAction<{ id: string, val: boolean }>) {
            state.selected[action.payload.id] = action.payload.val;
        },
        selectAll(state, action: PayloadAction<boolean>) {
            state.selectAll = action.payload;
            if (action.payload) {
                for (const id in state.logs) {
                    state.selected[id] = true;
                }
            } else {
                state.selected = {};
            }
        },
        resetLogs(state) {
            state.logs = {};
        },
        markRead(state, action: PayloadAction<{ id: string }>) {
            state.logs[action.payload.id].opened = true;
        },
        clearLogs(state) {
            state.logs = {};
            state.info = {};
            state.selected = {};
        },
        delete(state, action: PayloadAction<{ logIds: string[] }>) {
            action.payload.logIds.forEach((id) => {
                const log = state.logs[id];
                state.info[log.level]! -= 1;
                delete state.logs[id];
            });
            state.selected = {};
        },
        onError(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
    },
});

export default logSlice.reducer;
