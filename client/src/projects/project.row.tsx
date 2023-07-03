import React, { FC } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { ListItem, ListItemButton, ListItemText, Typography, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import { IProject } from './projects.model';
import { projectsRoute } from '../routes';
import { deleteProjectAction } from './projects.actions';
import { useAppDispatch } from '../hooks/redux';

interface IProjectRowProps {
    project: IProject
}

const ProjectRow: FC<IProjectRowProps> = ({ project }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onError = (msg: string) => {
        console.log(msg)
    }

    const onDelete = (e: React.MouseEvent<HTMLElement>, id: string) => {
        e.preventDefault();
        dispatch(deleteProjectAction(id, onError));
    }
    
    const onSettings = (e: React.MouseEvent<HTMLElement>, id: string) => {
        e.preventDefault();
        navigate(projectsRoute.url + '/settings/' + id);
    }

    return (
        <Link to={projectsRoute.url + '/' + project.id}>
            <ListItem disablePadding sx={{ '&:hover .project__control': { visibility: 'visible' }, '&:hover .project__controlWrap': { top: 7, opacity: 1 } }}>
                <ListItemButton sx={{position: 'relative'}}>
                    <ListItemText
                        primary={ <Typography sx={{color: 'text.primary', fontSize: 18, position: 'relative', top: 10}}>{project.title}</Typography>}
                        secondary={
                            <Box className="project__controlWrap" sx={{display: 'flex', position: 'absolute', top: 0, transition: '0.5s', opacity: 0}}>
                                <Box className="project__control" sx={{ visibility: 'hidden', display: 'flex'}}>
                                    <Typography component='span' sx={{ fontSize: 10, opacity: 0.7, display: 'flex', alignItems: 'center', '&:hover': { color: 'secondary.main' } }} onClick={(e) => onDelete(e, project.id)}>Delete <DeleteIcon sx={{ml: 0.5, fontSize: 14}} /></Typography>
                                    <Typography component='span' sx={{ ml: 2, fontSize: 10, opacity: 0.7, display: 'flex', alignItems: 'center', '&:hover': { color: 'secondary.main' } }} onClick={(e) => onSettings(e, project.id)}>Settings <SettingsIcon sx={{ml: 0.5, fontSize: 14}} /></Typography>
                                </Box>
                            </Box>
                        }
                        />
                </ListItemButton>
            </ListItem>
        </Link>
    )
}

export default ProjectRow;