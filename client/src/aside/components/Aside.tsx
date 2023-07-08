import React, { FC } from 'react';
import { Box, Paper, Divider } from '@mui/material';
import { IUser } from '../../user/user.model';
import { IRouteData } from '../../routes';
import AsideMenu from './AsideMenu';
import { AuthWidget, AvatarWidget, UserDataWidget } from '../../user';
import styles from '../styles/Aside.module.scss';

interface IAsideProp {
  user: IUser;
  activeRoutes: IRouteData[];
}

const Aside: FC<IAsideProp> = ({ user, activeRoutes }) => {
    return (
        <Paper className={styles.aside__wrapper}>
            <Box className={`${styles.aside__container} container`}>
                <AvatarWidget user={user} />
                <Divider className={styles.aside__divider} />

                <Box>
                    <AsideMenu activeRoutes={activeRoutes} />
                    <Divider className={styles.aside__divider} />
                    <UserDataWidget user={user} />
                </Box>

                <Box flexGrow={1} />
                <AuthWidget />
            </Box>
        </Paper>
    );
};

export default Aside;
