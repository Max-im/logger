import React, { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    ListItem, ListItemButton, ListItemText, Typography, Box, Divider, Snackbar, Alert,
} from '@mui/material';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import { useAppDispatch } from '../../hooks/redux';
import { projectsRoute } from '../../routes';
import { IProject } from '../model/projects.model';
import { deleteProjectAction } from '../state/projects.actions';
import styles from '../styles/ProjectRow.module.scss';

interface IProjectRowProps {
    project: IProject
}

const ProjectRow: FC<IProjectRowProps> = ({ project }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [showCopyMsg, setShowCopyMsg] = useState(false);

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

    const onCopyKey = (e: React.MouseEvent<HTMLElement>, id: string) => {
        e.preventDefault();
        navigator.clipboard.writeText(id);
        setShowCopyMsg(true);
    };

    const onHideCopyMsg = () => {
        setShowCopyMsg(false);
    };

    const btnHoverStyle = { '&:hover': { color: 'secondary.main' } };

    return (
        <Link to={`${projectsRoute.url}/${project.id}`} className={styles.link}>
            <ListItem disablePadding className={styles.row__item}>
                <ListItemButton>
                    <ListItemText
                        primary={(
                            <Box className={styles.row__titleWrap}>
                                <Typography color="text.primary" className={styles.row__title}>
                                    {project.title}
                                </Typography>
                            </Box>
                        )}
                        secondary={(
                            <Box className={styles.row__control}>
                                <Typography
                                    sx={btnHoverStyle}
                                    className={styles.row__controlItem}
                                    onClick={(e) => onDelete(e, project.id)}
                                >
                                    Delete
                                    <DeleteIcon className={styles.row__controlIcon} />
                                </Typography>
                                <Typography
                                    sx={btnHoverStyle}
                                    className={styles.row__controlItem}
                                    onClick={(e) => onSettings(e, project.id)}
                                >
                                    Settings
                                    <SettingsIcon className={styles.row__controlIcon} />
                                </Typography>
                                <Typography
                                    sx={btnHoverStyle}
                                    className={styles.row__controlItem}
                                    onClick={(e) => onCopyKey(e, project.id)}
                                >
                                    Copy Key
                                    <VpnKeyIcon className={styles.row__controlIcon} />
                                </Typography>
                            </Box>
                        )}
                    />
                </ListItemButton>
            </ListItem>
            <Divider />
            <Snackbar
                open={showCopyMsg}
                autoHideDuration={3000}
                onClose={onHideCopyMsg}
                className={styles.modal}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert severity="success">
                    Id copied
                </Alert>
            </Snackbar>
        </Link>
    );
};

export default ProjectRow;
