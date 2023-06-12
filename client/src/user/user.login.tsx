import * as React from 'react';
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { useAppDispatch } from '../hooks/redux';
import { loginAction } from './user.actions';

function UserLogin() {
  const dispatch = useAppDispatch();

  const onLogin = (credentialResponse: CredentialResponse) => {
    dispatch(loginAction(credentialResponse, onError));
  }

  const onError = (data: any) => {
    console.log('Error', data);
  }

  return (
    <GoogleOAuthProvider clientId={String(process.env.REACT_APP_GOOGLE_API)}>
      <GoogleLogin
        onSuccess={onLogin}
        onError={() => onError('Something went wrong')}
        type='icon'
        size='large'
        shape='circle'
        useOneTap={false}
      />
    </GoogleOAuthProvider>
  );
}
export default UserLogin;
