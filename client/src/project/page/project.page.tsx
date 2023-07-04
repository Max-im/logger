import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
    Paper, Typography, Divider, Box, Button,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { projectsRoute } from '../../routes';
import ProjectFilter from '../components/project.filter';
import ProjectKey from '../components/project-key';
import { getCurrentProjectAction } from '../state/project.actions';
import {
    DeleteLogsWidget, LogTable, LogsDiagramWidget, clearLogsAction,
} from '../../logs';

export default function ProjectPage() {
    const dispatch = useAppDispatch();
    const { projectId } = useParams();

    const { currentProject } = useAppSelector((state) => state.projectReducer);

    const onError = (msg: string) => {
        console.log(msg);
    };

    useEffect(() => {
        dispatch(getCurrentProjectAction(projectId!, onError));

        return function onCancel() {
            dispatch(clearLogsAction());
        };
    }, [dispatch, projectId]);

    const containerStyles = {
        flex: '0 0 30%',
        display: 'flex',
        flexDirection: 'column',
        position: 'sticky',
        height: 'calc(95vh - 60px)',
        top: '16px',
    };

    const secondarStyles = {
        maxWidth: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%',
    };

    return (
        <Box>
            {currentProject && (
                <Box sx={{ minHeight: 'calc(100vh - 92px)', display: 'flex' }}>
                    <Paper className="container" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="subtitle1">{currentProject.title}</Typography>
                        <Divider sx={{ mb: 2 }} />
                        <LogTable projectId={projectId!} />
                    </Paper>
                    <Box sx={{ mr: 2 }} />
                    <Paper className="container" sx={containerStyles}>
                        <Box>
                            <Typography variant="subtitle1">Project Info</Typography>
                            <Divider sx={{ mb: 2 }} />
                        </Box>

                        <Box sx={secondarStyles}>
                            <Box>
                                <LogsDiagramWidget />
                                <ProjectFilter />
                            </Box>
                            <Box flexGrow={1} />
                            <Box>
                                <Link to={`${projectsRoute.url}/settings/${currentProject.id}`}>
                                    <Button sx={{ mt: 2 }} startIcon={<SettingsIcon />}>
                                        <Typography color="text.primary">Project Settings</Typography>
                                    </Button>
                                </Link>
                                <ProjectKey id={currentProject.id} />
                                <DeleteLogsWidget />
                            </Box>
                        </Box>
                    </Paper>
                </Box>
            )}
        </Box>
    );
}
