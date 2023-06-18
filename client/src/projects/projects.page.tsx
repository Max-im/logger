import React, { useEffect } from 'react';
import { Paper, Table, TableHead, TableRow, TableCell, TableBody, Typography, Divider, Chip, Box } from '@mui/material';
import CreateProject from './projects.create';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { getProjectsAction } from './projects.actions';
import ProjectRow from './project.row';

const Projects = () => {
  const dispatch = useAppDispatch();
  const { projects } = useAppSelector(state => state.projectReducer);
  const projectsThreshold = 4;

  const onError = (msg: string) => {
    console.log(msg);
  }

  useEffect(() => {
    dispatch(getProjectsAction(onError));
  }, []);

  return (
    <Box sx={{height: '100%', display: 'flex'}}>
      <Paper className="container" sx={{height: '100%', flexGrow: 1}}>
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
    <Box sx={{p: 1}}></Box>
    <Paper className="container" sx={{height: '100%', flex: '0 0 30%'}}>
      <Typography variant="subtitle1">Projects Info</Typography>
      <Divider sx={{mb: 2, mt: 2}} />
      {
      projects.length >= projectsThreshold ?
        <Typography variant='body1'>
          You currently have a limit of {<Chip label={projectsThreshold} size="small" color="secondary" />} projects under your current plan. To create additional projects, please consider upgrading your plan.
        </Typography>
      : 
        <>
          <Typography sx={{mb:2}} variant='subtitle2'>You have access to {<Chip label={projectsThreshold} size="small" color="secondary" />} projects within the scope of your current plan.</Typography>
          <CreateProject />
        </>
      }
    </Paper>
  </Box>
  )
}

export default Projects;  