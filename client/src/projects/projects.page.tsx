import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Paper, Grid, List, ListItem, ListItemButton, ListItemText, Divider, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateProject from './projects.create';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { getProjectsAction, deleteProjectAction } from './projects.actions';
import { projectsRoute } from '../routes';

export default function Projects() {
  const dispatch = useAppDispatch();

  const { projects } = useAppSelector(state => state.projectReducer)

  const onError = (msg: string) => {
    console.log(msg);
  }

  const onDelete = (id: string, e: any) => {
    e.preventDefault();
    dispatch(deleteProjectAction(id, onError));
  }

  useEffect(() => {
    dispatch(getProjectsAction(onError));
  }, []);

  return (
    <Grid container spacing={2} sx={{minHeight: 'calc(90vh - 48px)'}}>
      <Grid item xs={8}>
        <Paper className="container" sx={{height: '100%'}}>
          <List>
            {projects.map(project => (
              <Link to={`${projectsRoute.url}/${project.id}`} key={project.id}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={project.title} secondary={project.description}/>
                    <IconButton>
                      {/* @ts-ignore */}
                      <DeleteIcon onClick={onDelete.bind(this, project.id)} />
                    </IconButton>
                  </ListItemButton>
                </ListItem>
                <Divider/>
              </Link>
            ))}
          </List>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className="container" sx={{height: '100%'}}>
          <CreateProject />
        </Paper>
      </Grid>
    </Grid>
  )
}
