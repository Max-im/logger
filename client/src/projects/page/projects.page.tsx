import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Paper, Typography, Divider, Chip, Box, List, ListItem, ListItemText } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { planRoute } from '../../routes';
import CreateProject from '../components/createProject';
import { getProjectsAction } from '../state/projects.actions';
import ProjectRow from '../components/projectRow';

const Projects = () => {
  const dispatch = useAppDispatch();
  const { projects } = useAppSelector(state => state.projectReducer);
  const { user } = useAppSelector(state => state.userReducer);
  const { plans } = useAppSelector(state => state.planReducer);

  let projectsThreshold = 0;
  if (user && plans.length) {
    projectsThreshold = plans.find(plan => plan.id === user.planId)!.projectsNum;
  }

  const onError = (msg: string) => {
    console.log(msg);
  }

  useEffect(() => {
    dispatch(getProjectsAction(onError));
  }, []);

  return (
    <Box sx={{height: '100%', display: 'flex'}}>
      <Paper className="container" component="div" sx={{height: '100%', flexGrow: 1}}>
        <>
          {Boolean(projects.length) && 
            <List>
              <ListItem disablePadding>
                <ListItemText primary="Projects list" />
              </ListItem>
              {projects.map(project => <ProjectRow key={project.id} project={project} />)}
          </List>
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
              You currently have a limit of {<Chip label={projectsThreshold} size="small" component="span" color="secondary" />} 
              projects under your current plan. To create additional projects, please consider upgrading your 
              <Link to={planRoute.url}><Typography color="primary">plan</Typography></Link>
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