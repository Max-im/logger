import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import Header from './header/header.component';
import Aside from './aside/aside.component';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { routes } from './routes';
import { RoleTypes } from './user/user.model';
import Theme from './theme/theme.component';
import { getPlansAction } from './plan';

function App() {
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((store) => store.userReducer);

    const userRole = user ? user.role : RoleTypes.GUEST;
    const activeRoutes = routes.filter((route) => userRole >= route.role);

    useEffect(() => {
        dispatch(getPlansAction());
    }, [dispatch]);

    const largeStyles = {
        height: '100%', pl: '0px !important', pr: '0px !important', display: 'flex', position: 'relative',
    };

    const innterWrap = {
        display: 'flex', flexDirection: 'column', width: '100%', pr: '0px !important', pb: '0px !important',
    };

    const appStyles = {
        display: 'flex', flexDirection: 'column', minHeight: '100vh', p: 2,
    };

    return (
        <Theme>
            <BrowserRouter>
                <Box className="app" sx={appStyles}>
                    <Container maxWidth="lg" sx={largeStyles}>
                        <Aside user={user} activeRoutes={activeRoutes} />
                        <Container sx={innterWrap}>
                            <Header />
                            <Box sx={{ flexGrow: 1 }}>
                                <Suspense fallback="loading">
                                    <Routes>
                                        {activeRoutes.map((route) => (
                                            <Route key={route.url} path={route.url} element={<route.element />} />
                                        ))}
                                    </Routes>
                                </Suspense>
                            </Box>
                        </Container>
                    </Container>
                </Box>
            </BrowserRouter>
        </Theme>
    );
}

export default App;
