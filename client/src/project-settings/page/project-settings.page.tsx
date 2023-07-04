import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const ProjectSettings = () => (
    <Paper sx={{ height: 'calc(100vh - 92px)', display: 'flex', flexDirection: 'column' }}>
        <Box className="container" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6">Notifications:</Typography>

            <Typography variant="h6">Crue:</Typography>

        </Box>
    </Paper>
);

export default ProjectSettings;
