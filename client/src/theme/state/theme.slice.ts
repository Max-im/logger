import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { THEME_LOCAL_VAR } from '../../constants';

export const defaultLightTheme = true;

interface ThemeState {
    light: boolean;
}

const initialState: ThemeState = {
    light: defaultLightTheme,
};

try {
    const isLight = localStorage.getItem(THEME_LOCAL_VAR);
    initialState.light = Boolean(isLight && isLight !== 'false');
} catch (err) {
    localStorage.removeItem(THEME_LOCAL_VAR);
    console.error(err);
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        change(state, action: PayloadAction<boolean>) {
            state.light = action.payload;
        },
    },
});

export default themeSlice.reducer;
