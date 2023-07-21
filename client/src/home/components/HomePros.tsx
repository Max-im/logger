import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import styles from '../styles/HomePros.module.scss';

export default function HomePros() {
    return (
        <Grid container spacing={2} className={styles.container}>
            <Grid item xs={3} className={styles.h100}>
                <Paper className={`container ${styles.h100}`}>
                    <RocketLaunchIcon className={styles.icon} color="primary" />
                    <Typography variant="body2">Start in just few clicks</Typography>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={`container ${styles.h100}`}>
                    <CardGiftcardIcon className={styles.icon} color="primary" />
                    <Typography variant="body2">Free plan</Typography>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={`container ${styles.h100}`}>
                    <AccountTreeIcon className={styles.icon} color="primary" />
                    <Typography variant="body2">Multi projects support</Typography>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={`container ${styles.h100}`}>
                    <NotificationsActiveIcon className={styles.icon} color="primary" />
                    <Typography variant="body2">Notifications</Typography>
                </Paper>
            </Grid>
        </Grid>
    );
}
