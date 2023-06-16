import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, RoleTypes } from '../models/User';
import { setAuthHeader } from '../services/http';
import jwtDecode from 'jwt-decode';
import { AUTH_LOCAL_VAR } from '../constants';

const defaultUser: IUser = {
    id: '',
    name: 'Guest',
    photo: '',
    email: '',
    role: RoleTypes.GUEST
}
interface UserState {
    user: IUser;
    authorized: boolean;
}

const initialState: UserState = {
    user: defaultUser,
    authorized: false,
}

try {
    const token = localStorage.getItem(AUTH_LOCAL_VAR);
    if (token) {
        const user = jwtDecode<IUser>(token);
        initialState.user = user;
        initialState.authorized = true;
        setAuthHeader(token);
    }
} catch(err) {
    localStorage.removeItem(AUTH_LOCAL_VAR);
    setAuthHeader(null);
    console.error(err);
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action: PayloadAction<IUser>) {
            state.user = action.payload;
            state.authorized = true;
        },
        logout(state) {
            state.user = defaultUser;
            state.authorized = false;
        },
    }
})

export default userSlice.reducer;