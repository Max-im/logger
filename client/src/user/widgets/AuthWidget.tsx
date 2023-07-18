import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { logoutRoute } from '../../routes';
import { useAppSelector } from '../../hooks/redux';
import UserLogin from '../components/user.login';

const AuthWidget: FC = () => {
    const navigate = useNavigate();
    const { authorized } = useAppSelector((store) => store.userReducer);

    const onLogout = () => {
        navigate(logoutRoute.url);
    };

    return (
        <Box sx={{ mt: 1, m: 'auto' }}>
            { authorized
                ? <Button variant="contained" size="small" onClick={onLogout}>Logout</Button>
                : <UserLogin />}
        </Box>
    );
};

export default AuthWidget;
