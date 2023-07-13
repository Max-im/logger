import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Paper, Typography, Divider, Box, Button } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { projectsRoute } from '../../routes';
import ProjectFilter from '../components/project.filter';
import ProjectKey from '../components/project-key';
import { getCurrentProjectAction } from '../state/project.actions';
import { DeleteLogsWidget, LogsTable, LogsDiagramWidget, clearLogsAction } from '../../logs';
import styles from '../styles/ProjectPage.module.scss';

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

    return (
        <Box>
            {currentProject && (
                <Box className={styles.project__wrapper}>
                    <Paper className={`container ${styles.project__main}`}>
                        <Typography variant="subtitle1">{currentProject.title}</Typography>
                        <Divider className={styles.project__divider} />
                        <LogsTable projectId={projectId!} />
                    </Paper>
                    <Box mr={2} />
                    <Paper className={`container ${styles.project__aside}`}>
                        <Box>
                            <Typography variant="subtitle1">Project Info</Typography>
                            <Divider className={styles.project__divider} />
                        </Box>

                        <Box className={styles.project__asideContent}>
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
