import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';
import { IRouteData } from '../../routes';

interface IAsideMenuProp {
  activeRoutes: IRouteData[];
}

const AsideMenu: FC<IAsideMenuProp> = ({ activeRoutes }) => {
    const navigate = useNavigate();

    const onNavigate = (url: string) => {
        navigate(url);
    };

    const menu = activeRoutes.filter((route) => route.isMenu);

    return (
        <nav>
            <Box mt={1}>
                <Typography variant="subtitle2" sx={{ color: 'info.main' }}>Menu</Typography>
                <List>
                    {menu.map((item) => (
                        <ListItem
                            disablePadding
                            key={item.url}
                            sx={{ m: 0 }}
                            onClick={() => onNavigate(item.url)}
                        >
                            <ListItemButton dense>
                                <ListItemIcon sx={{ minWidth: 40, color: 'info.main' }}>
                                    <item.icon />
                                </ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </nav>
    );
};

export default AsideMenu;
