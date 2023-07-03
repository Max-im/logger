import { combineReducers, configureStore } from '@reduxjs/toolkit';
import homeReducer from '../home/home.slice';
import userReducer from '../user/user.slice';
import themeReducer from '../theme/theme.slice';
import { projectReducer } from '../projects';
import { logReducer } from '../logs';
import { planReducer } from '../plan';

const rootReducer = combineReducers({
    homeReducer,
    userReducer,
    themeReducer,
    projectReducer,
    logReducer,
    planReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware()
    });
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']