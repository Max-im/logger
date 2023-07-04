import * as React from 'react';
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { useAppDispatch } from '../hooks/redux';
import { loginAction } from './user.actions';

function UserLogin() {
    const dispatch = useAppDispatch();

    const onError = (msg: string) => {
        console.log(msg);
    };

    const onCallback = (msg?: string) => {
        if (msg) onError(msg);
        else {
            window.location.reload();
        }
    };

    const onLogin = (credentialResponse: CredentialResponse) => {
        dispatch(loginAction(credentialResponse, onCallback));
    };

    return (
        <GoogleOAuthProvider clientId={String(process.env.REACT_APP_GOOGLE_API)}>
            <GoogleLogin
                onSuccess={onLogin}
                onError={() => onError('Something went wrong')}
                type="icon"
                size="large"
                shape="circle"
                useOneTap={false}
            />
        </GoogleOAuthProvider>
    );
}
export default UserLogin;
