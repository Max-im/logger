import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INotification } from '../model/notification.model';

interface NotificationState {
    active: INotification[];
    init: boolean;
    error: null | string;
}

const initialState: NotificationState = {
    active: [],
    init: false,
    error: null,
};

export const notificationSlice = createSlice({
    name: 'log',
    initialState,
    reducers: {
        get(state, action: PayloadAction<INotification[]>) {
            state.active = action.payload;
            state.init = true;
        },
        add(state, action: PayloadAction<INotification>) {
            state.active.push(action.payload);
        },
        onDelete(state, action: PayloadAction<number>) {
            state.active = state.active.filter((notification) => notification.id !== action.payload);
        },
        onError(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
    },
});

export default notificationSlice.reducer;
