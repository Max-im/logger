import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, Box, Grid } from '@mui/material';
import Header from './header/header.component';
import Aside from './aside/aside.component';
import { useAppSelector } from './hooks/redux';
import { routes } from './routes';
import { RoleTypes } from './user/user.model';
import Theme from './theme/theme.component';

function App() {
  const { user } = useAppSelector(store => store.userReducer);

  const userRole = user ? user.role : RoleTypes.GUEST; 
  const activeRoutes = routes.filter(route => userRole >= route.role);

  return (
    <Theme>
      <BrowserRouter>
        <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
          <Container maxWidth="lg" sx={{mt: 2, flexGrow: 1, height: '100%'}} >
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Aside user={user} activeRoutes={activeRoutes}/>
              </Grid>
              <Grid item xs={9}>
                <Header />
                <Routes>
                  {activeRoutes.map((route) => (
                    <Route key={route.url} path={route.url} element={<route.element />} />
                  ))}
                </Routes>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </BrowserRouter>
    </Theme>
  );
}

export default App;
