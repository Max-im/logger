import React, { FC } from 'react';
import {Link} from 'react-router-dom';
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

    const onError = (msg: string) => {
        console.log(msg)
    }

    const onDelete = (e: React.MouseEvent<HTMLElement>, id: string) => {
        e.preventDefault();
        dispatch(deleteProjectAction(id, onError));
    }
    
    const onSettings = (e: React.MouseEvent<HTMLElement>, id: string) => {
        e.preventDefault();
        console.log('//TODO: settings')
    }

    return (
        <Link to={projectsRoute.url + '/' + project.id}>
            <ListItem disablePadding sx={{'&:hover .project__control': {visibility: 'visible'}}}>
                <ListItemButton>
                    <ListItemText
                        primary={ <Typography sx={{color: 'text.primary'}}>{project.title}</Typography>}
                        secondary={
                            <Box sx={{display: 'flex'}}>
                                <Box className="project__control" sx={{ visibility: 'hidden', display: 'flex'}}>
                                    <Typography component='span' sx={{ opacity: 0.7, display: 'flex', alignItems: 'center', '&:hover': { color: 'secondary.main' } }} onClick={(e) => onDelete(e, project.id)}>Delete <DeleteIcon sx={{ml: 0.5, fontSize: 14}} /></Typography>
                                    <Typography component='span' sx={{ ml: 2, opacity: 0.7, display: 'flex', alignItems: 'center', '&:hover': { color: 'secondary.main' } }} onClick={(e) => onSettings(e, project.id)}>Settings <SettingsIcon sx={{ml: 0.5, fontSize: 14}} /></Typography>
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