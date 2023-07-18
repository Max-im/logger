import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Chip } from '@mui/material';
import { planRoute } from '../../routes';

interface IProjectsLimitInfoProps {
    projectsThreshold: number;
    current: number
}

const ProjectsLimitInfo: FC<IProjectsLimitInfoProps> = ({ projectsThreshold, current }) => {
    return (
        <>
            {current >= projectsThreshold && (
                <Typography variant="body1">
                    You currently have a limit of
                    {' '}
                    <Chip label={projectsThreshold} size="small" component="span" color="secondary" />
                    projects under your current plan. To create additional projects,
                    please consider upgrading your
                    <Link to={planRoute.url}><Typography color="primary">plan</Typography></Link>
                </Typography>
            )}

            {current < projectsThreshold && (
                <Typography mb={2} variant="subtitle2">
                    You have access to
                    {' '}
                    <Chip label={projectsThreshold} size="small" color="secondary" />
                    {' '}
                    projects within the scope of your current plan.
                </Typography>
            )}
        </>
    );
};

export default ProjectsLimitInfo;
