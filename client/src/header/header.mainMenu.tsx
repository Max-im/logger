import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { menuRoutes } from '../routes';
import { IUser, RolesMap } from '../models/User';


const MainMenu: FC<{user: IUser | null}> = ({ user }) => {
  const navigate = useNavigate();
  const userRole = user ? RolesMap[user.role] : RolesMap.GUEST; 
  const activeRoutes = menuRoutes.filter(route => route.role <= userRole);

  const handleCloseNavMenu = (url: string) => {
    navigate(url);
  };


  return (
    <Box sx={{ flexGrow: 1, display: 'flex' }}>
      {activeRoutes.map((route) => (
        <Button
          key={route.url}
          onClick={() => handleCloseNavMenu(route.url)}
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          {route.title}
        </Button>
      ))}
    </Box>
  );
}
export default MainMenu;
