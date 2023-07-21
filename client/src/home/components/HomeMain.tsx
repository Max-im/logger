import React from 'react';
import { Link } from 'react-router-dom';
import {
    Grid, Paper, Typography, List, ListItem, ListItemIcon, ListItemText, Box,
} from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PowerIcon from '@mui/icons-material/Power';
import { projectsRoute } from '../../routes';
import styles from '../styles/HomeMain.module.scss';

export default function HomeMain() {
    const primaryText = { color: 'text.primary' };

    return (
        <Grid container spacing={2} mb={2} flexGrow={1}>
            <Grid item xs={8}>
                <Paper className={`container ${styles.banner__container}`}>
                    <Box className={styles.banner__dots} />
                    <Typography variant="h2">{process.env.REACT_APP_NAME}</Typography>
                    <Typography variant="h3" className={styles.banner__subtitle} color="secondary">
                        Keep your project on track
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={`container ${styles.flow__container}`}>
                    <Typography variant="h3" className={styles.banner__subtitle} color="secondary">
                        Start Now
                    </Typography>
                    <List>
                        <Link to={projectsRoute.url}>
                            <ListItem className={styles.flow__item}>
                                <ListItemIcon className={styles.flow__iconWrapper}>
                                    <CreateNewFolderIcon className={styles.flow__icon} />
                                </ListItemIcon>
                                <ListItemText primary="Create Project" sx={primaryText} />
                            </ListItem>
                        </Link>
                        <ListItem className={styles.flow__item}>
                            <ListItemIcon className={styles.flow__iconWrapper}>
                                <VpnKeyIcon className={styles.flow__icon} />
                            </ListItemIcon>
                            <ListItemText primary="Copy Key" sx={primaryText} />
                        </ListItem>
                        <ListItem className={styles.flow__item}>
                            <ListItemIcon className={styles.flow__iconWrapper}>
                                <NotificationsActiveIcon className={styles.flow__icon} />
                            </ListItemIcon>
                            <ListItemText primary="Setup Notifications" sx={primaryText} />
                        </ListItem>
                        <ListItem className={styles.flow__item}>
                            <ListItemIcon className={styles.flow__iconWrapper}>
                                <PowerIcon className={styles.flow__icon} />
                            </ListItemIcon>
                            <ListItemText primary="Plugin to your project" sx={primaryText} />
                        </ListItem>
                    </List>
                </Paper>
            </Grid>
        </Grid>
    );
}
