import React, { FC } from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import { IUser } from '../model/user.model';
import styles from '../styles/AvatarWidget.module.scss';

const AvatarWidget: FC<{ user: IUser }> = ({ user }) => {
    return (
        <Box>
            <Avatar
                alt={user.name}
                src={user.photo}
                className={styles.avatar}
                sx={{ borderColor: 'info.main' }}
            />
            <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>{user.name}</Typography>
        </Box>
    );
};

export default AvatarWidget;
