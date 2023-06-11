import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../models/User';

interface UserState {
    user: IUser | null;
}

const initialState: UserState = {
    user: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action: PayloadAction<IUser>) {
            state.user = action.payload;
        },
        logout(state) {
            state.user = null;
        },
    }
})

export default userSlice.reducer;