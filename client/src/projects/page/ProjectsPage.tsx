import React, { useEffect } from 'react';
import { Paper, Typography, Divider, Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import CreateProject from '../components/CreateProject';
import { getProjectsAction } from '../state/projects.actions';
import styles from '../styles/ProjectsPage.module.scss';
import ProjectsList from '../components/ProjectsList';
import ProjectsLimitInfo from '../components/ProjectsLimitInfo';

const ProjectsPage = () => {
    const dispatch = useAppDispatch();
    const { projects } = useAppSelector((state) => state.projectReducer);
    const { user } = useAppSelector((state) => state.userReducer);
    const { plans } = useAppSelector((state) => state.planReducer);

    let projectsThreshold = 0;
    if (user && plans.length) {
        projectsThreshold = plans.find((plan) => plan.id === user.planId)!.projectsNum;
    }

    const onError = (msg: string) => {
        console.log(msg);
    };

    useEffect(() => {
        dispatch(getProjectsAction(onError));
    }, [dispatch]);

    return (
        <Box className={styles.projects__wrapper}>
            <Paper className={`container ${styles.projects__main}`} component="div">
                <ProjectsList projects={projects} />
            </Paper>
            <Box p={1} />
            <Paper className={`container ${styles.projects__aside}`}>
                <Typography variant="subtitle1">Projects Info</Typography>
                <Divider className={styles.projects__divider} />
                <ProjectsLimitInfo projectsThreshold={projectsThreshold} current={projects.length} />
                { projects.length < projectsThreshold && <CreateProject /> }
            </Paper>
        </Box>
    );
};

export default ProjectsPage;
