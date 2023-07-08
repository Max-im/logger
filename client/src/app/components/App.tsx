import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { routes } from '../../routes';
import { RoleTypes } from '../../user/user.model';
import { getPlansAction } from '../../plan';
import { Aside } from '../../aside';
import { Spinner } from '../../shared/ui/Spinner';
import Header from '../../header/header.component';
import Theme from '../../theme/theme.component';
import styles from '../styles/App.module.scss';

function App() {
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((store) => store.userReducer);

    const userRole = user ? user.role : RoleTypes.GUEST;
    const activeRoutes = routes.filter((route) => userRole >= route.role);

    useEffect(() => {
        dispatch(getPlansAction());
    }, [dispatch]);

    return (
        <Theme>
            <BrowserRouter>
                <Box className={styles.app__wrapper}>
                    <Container maxWidth="lg" className={styles.app__container}>
                        <Aside user={user} activeRoutes={activeRoutes} />
                        <Container className={styles.app__main}>
                            <Header />
                            <Box flexGrow={1}>
                                <Suspense fallback={<Spinner />}>
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
