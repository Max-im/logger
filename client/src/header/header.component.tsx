import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { useLocation } from 'react-router-dom';
import { Badge, Box, IconButton, Switch, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { routes } from '../routes';

function Header() {
  const location = useLocation();
  const route = routes.find(route => route.url.toLowerCase().trim() === location.pathname.toLocaleLowerCase().trim());

  return (
    <Box position="static">
      <Toolbar variant="dense">
        {route &&
          <Box>
            <Typography variant="button" component="h1" sx={{fontSize: 24, opacity: 0.7}}>
              {route.title}
            </Typography>
            <Typography variant="body1" component="p" sx={{fontSize: 12, opacity: 0.7, position: 'relative', top: -10}}>
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
        <Switch />
      </Toolbar>
    </Box>
  );
}
export default Header;
