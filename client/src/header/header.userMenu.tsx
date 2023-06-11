import React, { FC } from 'react';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { userMenuRoutes } from '../routes';
import { IUser } from '../models/User';

const UserMenu: FC<{user: IUser}> = ({user}) => {
  const navigate = useNavigate();

  const [showUserMenu, setShowUserMenu] = React.useState<null | HTMLElement>(null);

  const onShowMenu = (event: React.MouseEvent<HTMLElement>) => {
    setShowUserMenu(event.currentTarget);
  };

  const onCloseMenu = () => {
    setShowUserMenu(null);
  };

  const handleCloseNavMenu = (url: string) => {
    navigate(url);
    onCloseMenu();
  };

  return (
    <Box  >
      <Tooltip title="User Menu">
        <IconButton onClick={onShowMenu} sx={{ p: 0 }}>
          <Avatar alt={user.name} src={user.photo} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        anchorEl={showUserMenu}
        anchorOrigin={{vertical: 'top', horizontal: 'right'}}
        keepMounted
        transformOrigin={{vertical: 'top', horizontal: 'right'}}
        open={Boolean(showUserMenu)}
        onClose={onCloseMenu}
      >
        {userMenuRoutes.map((route) => (
          <MenuItem key={route.url} onClick={() => handleCloseNavMenu(route.url)}>
            <Typography textAlign="center">{route.title}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
export default UserMenu;
