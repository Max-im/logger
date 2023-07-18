import React from 'react';
import { Paper, Box } from '@mui/material';
import { NotificationSettings } from '../../notification';
import styles from '../styles/ProjectSettings.module.scss';

const ProjectSettings = () => {
    return (
        <Paper className={styles.settings__wrapper}>
            <Box className={`container ${styles.settings__container}`}>
                <NotificationSettings />
            </Box>
        </Paper>
    );
};

export default ProjectSettings;
