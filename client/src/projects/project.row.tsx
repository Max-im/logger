import React, { FC } from 'react';
import {Link} from 'react-router-dom';
import { IconButton, TableRow, TableCell, Typography } from '@mui/material';
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

    const onDelete = (id: string, e: any) => {
        e.preventDefault();
        dispatch(deleteProjectAction(id, onError));
    }

    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell scope="row">
                <Link to={`${projectsRoute.url}/${project.id}`} key={project.id}>
                    <Typography variant='subtitle1' color="text.primary">
                        {project.title}
                    </Typography>
                </Link>
            </TableCell>
            <TableCell align="right">
                <IconButton>
                    {/* @ts-ignore */}
                    <DeleteIcon onClick={onDelete.bind(this, project.id)} />
                </IconButton>
            </TableCell>
        </TableRow>
    )
}

export default ProjectRow;