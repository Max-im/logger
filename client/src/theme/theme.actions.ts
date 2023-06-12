import { THEME_LOCAL_VAR } from '../constants';
import { AppDispatch } from '../store/store';
import { themeSlice } from './theme.slice';

export const changeTheme = (isLight: boolean) => (dispatch: AppDispatch) => {
  try {
    dispatch(themeSlice.actions.change(isLight));
    localStorage.setItem(THEME_LOCAL_VAR, String(isLight));
  } catch (err) {
    console.error(err);
  }
};
