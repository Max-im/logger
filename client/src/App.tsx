import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import Header from './header/header.component';
import Aside from './aside/aside.component';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { routes } from './routes';
import { RoleTypes } from './user/user.model';
import Theme from './theme/theme.component';
import { getPlansAction } from './plan/plan.actions';

function App() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(store => store.userReducer);

  const userRole = user ? user.role : RoleTypes.GUEST; 
  const activeRoutes = routes.filter(route => userRole >= route.role);

  useEffect(() => {
    dispatch(getPlansAction());
  }, []);

  return (
    <Theme>
      <BrowserRouter>
        <Box className="app" sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh', p: 2}}>
          <Container maxWidth="lg" sx={{height: '100%', pl: '0px !important', pr: '0px !important', display: 'flex', position: 'relative'}} >
            <Aside user={user} activeRoutes={activeRoutes}/>
            <Container sx={{display: 'flex', flexDirection: 'column', width: '100%', pr: '0px !important', pb: '0px !important'}}>
              <Header />
              <Box sx={{ flexGrow: 1}}>
                <Routes>
                  {activeRoutes.map((route) => (
                    <Route key={route.url} path={route.url} element={<route.element />} />
                    ))}
                </Routes>
              </Box>
            </Container>
          </Container>
        </Box>
      </BrowserRouter>
    </Theme>
  );
}

export default App;
