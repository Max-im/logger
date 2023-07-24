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
import ErrBanner from '../../shared/ui/ErrBanner';

export default function ProjectPage() {
    const dispatch = useAppDispatch();
    const { projectId } = useParams();
    const { currentProject, error } = useAppSelector((state) => state.projectReducer);

    useEffect(() => {
        dispatch(getCurrentProjectAction(projectId!));

        return function onCancel() {
            dispatch(clearLogsAction());
        };
    }, [dispatch, projectId]);

    return (
        <Box>
            <Box className={styles.project__wrapper}>
                <Paper className={`container ${styles.project__main}`}>
                    {currentProject && (
                        <>
                            <Typography variant="subtitle1">{currentProject.title}</Typography>
                            <Divider className={styles.project__divider} />
                            <LogsTable projectId={projectId!} />
                        </>
                    )}
                    <ErrBanner error={error} />
                </Paper>
                <Box mr={2} />
                <Paper className={`container ${styles.project__aside}`}>
                    {currentProject && (
                        <>
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
                        </>
                    )}
                </Paper>
            </Box>
        </Box>
    );
}
