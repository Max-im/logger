import React, { useEffect } from 'react';
import { Paper, Grid, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import CreateProject from './projects.create';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { getProjectsAction } from './projects.actions';
import ProjectRow from './project.row';

const Projects = () => {
  const dispatch = useAppDispatch();
  const { projects } = useAppSelector(state => state.projectReducer)

  const onError = (msg: string) => {
    console.log(msg);
  }

  useEffect(() => {
    dispatch(getProjectsAction(onError));
  }, []);

  return (
    <Grid container spacing={2} sx={{minHeight: 'calc(90vh - 48px)'}}>
      <Grid item xs={8}>
        <Paper className="container" sx={{height: '100%'}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Project</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map(project => <ProjectRow key={project.id} project={project} />)}
          </TableBody>
        </Table>
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

export default Projects;