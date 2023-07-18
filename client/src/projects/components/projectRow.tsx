import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    ListItem, ListItemButton, ListItemText, Typography, Box, Divider,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import { useAppDispatch } from '../../hooks/redux';
import { projectsRoute } from '../../routes';
import { IProject } from '../model/projects.model';
import { deleteProjectAction } from '../state/projects.actions';
import { ProjectKey } from '../../project';
import styles from '../styles/ProjectRow.module.scss';

interface IProjectRowProps {
    project: IProject
}

const ProjectRow: FC<IProjectRowProps> = ({ project }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onError = (msg: string) => {
        console.log(msg);
    };

    const onDelete = (e: React.MouseEvent<HTMLElement>, id: string) => {
        e.preventDefault();
        dispatch(deleteProjectAction(id, onError));
    };

    const onSettings = (e: React.MouseEvent<HTMLElement>, id: string) => {
        e.preventDefault();
        navigate(`${projectsRoute.url}/settings/${id}`);
    };

    return (
        <Link to={`${projectsRoute.url}/${project.id}`}>
            <ListItem disablePadding className={styles.row__item}>
                <ListItemButton>
                    <ListItemText
                        primary={(
                            <Box className={styles.row__titleWrap}>
                                <Typography
                                    color="text.primary"
                                    className={styles.row__title}
                                >
                                    {project.title}
                                </Typography>
                                <Box className={styles.row__key}>
                                    <ProjectKey id={project.id} />
                                </Box>
                            </Box>
                        )}
                        secondary={(
                            <Box className={styles.row__control}>
                                <Typography
                                    className={styles.row__controlItem}
                                    sx={{ '&:hover': { color: 'secondary.main' } }}
                                    onClick={(e) => onDelete(e, project.id)}
                                >
                                    Delete
                                    <DeleteIcon className={styles.row__controlIcon} />
                                </Typography>
                                <Typography
                                    ml={2}
                                    sx={{ '&:hover': { color: 'secondary.main' } }}
                                    className={styles.row__controlItem}
                                    onClick={(e) => onSettings(e, project.id)}
                                >
                                    Settings
                                    <SettingsIcon className={styles.row__controlIcon} />
                                </Typography>
                            </Box>
                        )}
                    />
                </ListItemButton>
            </ListItem>
            <Divider />
        </Link>
    );
};

export default ProjectRow;
