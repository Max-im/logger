import React from 'react';
import { Paper, Box } from '@mui/material';
import { NotificationSettings } from '../../notification';

const ProjectSettings = () => {
    return (
        <Paper sx={{ height: 'calc(100vh - 92px)', display: 'flex', flexDirection: 'column' }}>
            <Box className="container" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <NotificationSettings />
            </Box>
        </Paper>
    );
};

export default ProjectSettings;
