import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';
import { logoutAction } from '../state/user.actions';
import { useAppDispatch } from '../../hooks/redux';
import { homeRoute } from '../../routes';

export default function Logout() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        googleLogout();
        dispatch(logoutAction());
        setTimeout(() => { navigate(homeRoute.url); }, 1500);
    }, [dispatch, navigate]);

    return (
        <>Logging Out</>
    );
}
