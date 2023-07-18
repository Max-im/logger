import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../user';
import { themeReducer } from '../theme';
import { homeReducer } from '../home';
import { projectReducer } from '../projects';
import { logReducer } from '../logs';
import { planReducer } from '../plan';
import { notificationReducer } from '../notification';

const rootReducer = combineReducers({
    homeReducer,
    userReducer,
    themeReducer,
    projectReducer,
    logReducer,
    planReducer,
    notificationReducer,
});

export const setupStore = () => configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
