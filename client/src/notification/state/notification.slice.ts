import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INotification } from '../model/notification.model';

interface NotificationState {
    active: INotification[];
    init: boolean;
}

const initialState: NotificationState = {
    active: [],
    init: false,
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
    },
});

export default notificationSlice.reducer;
