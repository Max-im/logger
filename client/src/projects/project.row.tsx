import React, { FC } from 'react';
import {Link} from 'react-router-dom';
import { IconButton, TableRow, TableCell, Typography, Button, Chip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
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

    const onDelete = (id: string) => {
        dispatch(deleteProjectAction(id, onError));
    }

    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell scope="row">
                <Link to={`${projectsRoute.url}/${project.id}`} key={project.id} style={{textDecoration: 'none', cursor: 'pointer'}}>
                    <Typography variant='subtitle1' color="text.primary">
                        {project.title}
                    </Typography>
                </Link>
            </TableCell>
            <TableCell align="right">
                <IconButton onClick={() => onDelete(project.id)}>
                    <DeleteIcon color='error' sx={{ opacity: 0.7 }} />
                </IconButton>
            </TableCell>
        </TableRow>
    )
}

export default ProjectRow;