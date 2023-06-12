import React   from 'react';
import Toolbar from '@mui/material/Toolbar';
import { useLocation } from 'react-router-dom';
import { Badge, Box, IconButton, Switch, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { routes } from '../routes';
import { changeTheme } from '../theme/theme.actions';

function Header() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { light } = useAppSelector(state => state.themeReducer);
  
  const route = routes.find(route => route.url.toLowerCase().trim() === location.pathname.toLocaleLowerCase().trim());

  const onChangeTheme = (val: boolean) => {
    dispatch(changeTheme(val))
  }

  return (
    <Box position="static">
      <Toolbar variant="dense">
        {route &&
          <Box>
            <Typography variant="h1" component="h1">
              {route.title}
            </Typography>
            <Typography variant="body1" color="secondary" component="p" sx={{position: 'relative', top: -7, textShadow: '1px 1px 1px rgba(255,255,255,.7);'}}>
              {route.subtitle}
            </Typography>
          </Box> 
        }
        <Box sx={{ flexGrow: 1 }} />
        <IconButton size="large" color="inherit">
          <Badge badgeContent={5} color="info">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Switch checked={light} color="info" onChange={() => onChangeTheme(!light)} />
      </Toolbar>
    </Box>
  );
}
export default Header;
