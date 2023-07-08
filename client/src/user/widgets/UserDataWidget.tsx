import React, { FC } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Chip, Typography, Box } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { IUser, RoleTypes } from '../../user/user.model';
import { useAppSelector } from '../../hooks/redux';

const UserDataWidget: FC<{user: IUser}> = ({ user }) => {
    const { plans } = useAppSelector((state) => state.planReducer);

    const plan = plans.find((plan) => plan.id === user.planId);

    const role = RoleTypes[user.role];

    return (
        <Box>
            <Typography variant="subtitle2" sx={{ opacity: 0.3 }}>User Data</Typography>

            <List>
                { Boolean(role) && (
                    <ListItem sx={{ m: 0 }}>
                        <ListItemIcon sx={{ minWidth: 40, color: 'info.main' }}>
                            <AccountBoxIcon />
                        </ListItemIcon>
                        <ListItemText secondary="Role" />
                        <Chip label={RoleTypes[user.role]} size="small" />
                    </ListItem>
                )}
                {plan && (
                    <ListItem sx={{ m: 0 }}>
                        <ListItemIcon sx={{ minWidth: 40, color: 'info.main' }}>
                            <AccountBoxIcon />
                        </ListItemIcon>
                        <ListItemText secondary="Plan" />
                        <Chip label={plan.name} size="small" />
                    </ListItem>
                )}
            </List>
        </Box>
    );
};

export default UserDataWidget;
