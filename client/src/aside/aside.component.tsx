import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Avatar, Paper, Typography, Divider, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Chip }  from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { IUser, RoleTypes } from '../user/user.model'
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
  const { plans } = useAppSelector(state => state.planReducer);

  const plan = plans.find(plan => plan.id === user.planId);

  const onLogout = () => {
    navigate(logoutRoute.url);
  }

  const onNavigate = (url: string) => {
    navigate(url);
  }

  const menu = activeRoutes.filter(route => route.isMenu);

  return (
    <Paper sx={{ height: '100%', flex: '0 0 22%', position: 'sticky', top: '16px'}}>
      <Box className="container" sx={{display: 'flex', flexDirection: 'column', height: '95vh' }}>
        <Box>
          <Avatar alt={user.name} src={user.photo}  sx={{ width: 48, height: 48, m: '10px auto', border: `2px solid transparent`, borderColor: 'info.main' }}  />
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
          <Divider sx={{mt:1, mb: 1}} />
          <Typography variant='subtitle2' sx={{opacity: 0.3}}>User Data</Typography>
          <List>
            {
              Boolean(RoleTypes[user.role]) &&
                <ListItem sx={{m: 0}}>
                  <ListItemIcon sx={{minWidth: 40, opacity: 0.3}}>
                    <AccountBoxIcon />
                  </ListItemIcon>
                  <ListItemText secondary="Role" /> 
                  <Chip label={RoleTypes[user.role]} size='small'/>
              </ListItem>
            }
            {plan && 
              <ListItem sx={{m: 0}}>
                  <ListItemIcon sx={{minWidth: 40, opacity: 0.3}}>
                    <AccountBoxIcon />
                  </ListItemIcon>
                  <ListItemText secondary="Plan" /> 
                  <Chip label={plan.name} size='small'/>
              </ListItem>
            }
          </List>
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