import React, { useEffect } from 'react';
import { Paper, Typography, Divider, Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import CreateProject from '../components/CreateProject';
import { getProjectsAction } from '../state/projects.actions';
import styles from '../styles/ProjectsPage.module.scss';
import ProjectsList from '../components/ProjectsList';
import ProjectsLimitInfo from '../components/ProjectsLimitInfo';
import ErrBanner from '../../shared/ui/ErrBanner';

const ProjectsPage = () => {
    const dispatch = useAppDispatch();
    const { projects, error } = useAppSelector((state) => state.projectReducer);
    const { user } = useAppSelector((state) => state.userReducer);
    const { plans } = useAppSelector((state) => state.planReducer);

    let projectsThreshold = 0;
    if (user && plans.length) {
        projectsThreshold = plans.find((plan) => plan.id === user.planId)!.projectsNum;
    }

    useEffect(() => {
        dispatch(getProjectsAction());
    }, [dispatch]);

    return (
        <Box className={styles.projects__wrapper}>
            <Paper className={`container ${styles.projects__main}`} component="div">
                {!error && <ProjectsList projects={projects} />}
                <ErrBanner error={error} />
            </Paper>
            <Box p={1} />
            <Paper className={`container ${styles.projects__aside}`}>
                {!error && (
                    <>
                        <Typography variant="subtitle1">Projects Info</Typography>
                        <Divider className={styles.projects__divider} />
                        <ProjectsLimitInfo projectsThreshold={projectsThreshold} current={projects.length} />
                        { projects.length < projectsThreshold && <CreateProject /> }
                    </>
                )}
            </Paper>
        </Box>
    );
};

export default ProjectsPage;
