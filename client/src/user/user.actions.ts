import jwtDecode from 'jwt-decode';
import { CredentialResponse } from '@react-oauth/google';
import { AppDispatch } from '../store/store';
import { IUserAuth } from '../user/user.model';
import { userSlice } from './user.slice';
import api, { setAuthHeader } from '../services/http';
import { AUTH_LOCAL_VAR, DEFAULT_ERROR_TEXT, THEME_LOCAL_VAR, USER_LOGIN_URL } from '../constants';

interface ICredentials {
  name: string;
  picture: string;
  email: string
}

export const loginAction = (credentialResponse: CredentialResponse, errorCb: any) => async (dispatch: AppDispatch) => {
  try {
    if (!(credentialResponse && credentialResponse.credential)) throw new Error('Invalid Credentials');

    const { name, picture: photo, email } = jwtDecode<ICredentials>(credentialResponse.credential);
    const payload = { email, clientId: credentialResponse.clientId, name, photo };
    const response = await api.post<IUserAuth>(USER_LOGIN_URL, payload);
    const {user, token} = response.data;

    setAuthHeader(token);
    dispatch(userSlice.actions.login(user));

    try {
      localStorage.setItem(AUTH_LOCAL_VAR, token);
    } catch(err) {
      console.error(err);
    }
  } catch (err) {
    console.log({ err: err.message })
    const message = err.message || DEFAULT_ERROR_TEXT;
    errorCb(message);
    
  }
};

export const logoutAction = () => (dispatch: AppDispatch) => {
  dispatch(userSlice.actions.logout());
  localStorage.removeItem(AUTH_LOCAL_VAR);
  localStorage.removeItem(THEME_LOCAL_VAR);
};
