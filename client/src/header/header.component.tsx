import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import MainMenu from './header.mainMenu';
import UserLogin from '../user/user.login';
import { useAppSelector } from '../hooks/redux';

function Header() {
  const { user } = useAppSelector((state) => state.userReducer);

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: 'flex', mr: 1 }} />
          <MainMenu user={user} />
          {!user && <UserLogin />}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
