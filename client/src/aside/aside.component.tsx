import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Avatar, Paper, Typography, Divider, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText }  from '@mui/material';
import { IUser } from '../user/user.model'
import { IRouteData, logoutRoute } from '../routes';
import { useAppSelector } from '../hooks/redux';
import UserLogin from '../user/user.login';

interface IAsideProp {
  user: IUser;
  activeRoutes: IRouteData[];
}

const Aside: FC<IAsideProp> = ({ user, activeRoutes }) => {
  const navigate = useNavigate();
  const { authorized } = useAppSelector(store => store.userReducer);

  const onLogout = () => {
    navigate(logoutRoute.url);
  }

  const onNavigate = (url: string) => {
    navigate(url);
  }

  const menu = activeRoutes.filter(route => route.isMenu);

  return (
    <Paper sx={{height: '100%', flex: '0 0 22%'}}>
      <Box className="container" sx={{display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Box>
          <Avatar alt={user.name} src={user.photo}  sx={{ width: 48, height: 48, m: '10px auto' }}  />
          <Typography variant='subtitle1' sx={{ textAlign: 'center' }}>{user.name}</Typography>
        </Box>
        <Divider sx={{mt:1}} />
        <Box sx={{flex: '1 1 100%'}}>
          <Box sx={{mt: 1}}>
            <Typography variant='subtitle2' sx={{opacity: 0.3}}>Menu</Typography>
            <List>
            {menu && menu.map((item: IRouteData) => (
              <ListItem disablePadding key={item.url} sx={{m: 0}} onClick={() => onNavigate(item.url)}>
                <ListItemButton dense>
                  <ListItemIcon sx={{minWidth: 40, opacity: 0.3}}>
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
            </List>
          </Box>
        </Box>
        <Box flexGrow={'100%'}></Box>
        <Box sx={{mt: 1, m: 'auto'}}>
          { authorized ? 
            <Button variant='contained' size='small' onClick={onLogout}>Logout</Button> :
            <UserLogin />
          }
        </Box>
      </Box>
    </Paper>
  )
}

export default Aside;