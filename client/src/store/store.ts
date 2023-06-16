import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../user/user.slice';
import themeReducer from '../theme/theme.slice';
import projectReducer from '../projects/projects.slice';

const rootReducer = combineReducers({
    userReducer,
    themeReducer,
    projectReducer
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