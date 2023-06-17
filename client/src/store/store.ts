import { combineReducers, configureStore } from '@reduxjs/toolkit';
import homeReducer from '../home/home.slice';
import userReducer from '../user/user.slice';
import themeReducer from '../theme/theme.slice';
import projectReducer from '../projects/projects.slice';
import logReducer from '../log/log.slice';

const rootReducer = combineReducers({
    homeReducer,
    userReducer,
    themeReducer,
    projectReducer,
    logReducer
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