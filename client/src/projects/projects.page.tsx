import React, { useEffect } from 'react';
import { Paper, Grid, Table, TableHead, TableRow, TableCell, TableBody, Typography, Divider } from '@mui/material';
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
          <>
          {Boolean(projects.length) && 
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Project</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {projects.map(project => <ProjectRow key={project.id} project={project} />)}
              </TableBody>
            </Table>
          }
          {Boolean(projects.length) || <Typography variant='subtitle1'>You dont have projects yet, please Create new</Typography>}
          </>
      </Paper>
    </Grid>
    <Grid item xs={4}>
      <Paper className="container" sx={{height: '100%'}}>
        <Typography variant="subtitle1">Projects Info</Typography>
        <Divider sx={{mb: 2, mt: 2}} />
        {/* <Typography variant='body1'>
          You currently have a limit of 3 projects under your current plan. To create additional projects, please consider upgrading your plan.
        </Typography> */}
        <Typography sx={{mb:2}} variant='subtitle2'>You have access to 3 projects within the scope of your current plan.</Typography>
        <CreateProject />
      </Paper>
    </Grid>
  </Grid>
  )
}

export default Projects;  