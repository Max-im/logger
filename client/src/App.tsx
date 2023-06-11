import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from '@mui/material/Container';
import Header from './header/header.component';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { pickUpUserAction } from './user/user.actions';
import { notFounRoute, routes } from './routes';
import { RolesMap } from './models/User';

function App() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(store => store.userReducer);

  useEffect(() => {
    dispatch(pickUpUserAction());
  }, []);

  const userRole = user ? RolesMap[user.role] : RolesMap.GUEST; 
  const activeRoutes = routes.filter(route => userRole >= route.role);

  return (
    <BrowserRouter>
      <Header />
      <Container maxWidth="lg" sx={{mt: 2}}>
        <Routes>
          {activeRoutes.map((route) => (
            <Route key={route.url} path={route.url} element={<route.element />} />
          ))}
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
