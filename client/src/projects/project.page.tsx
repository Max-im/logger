import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Paper, Typography, Divider, Box, Button } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { getCurrentProjectAction, clearCurrentObject } from './projects.actions';
import LogStructure from '../log/log.structure.diagram';
import ProjectFilter from './project.filter';
import ProjectKey from './project-key.component';
import LogList from '../log/log.table';
import { projectsRoute } from '../routes';

export default function ProjectPage() {
  const dispatch = useAppDispatch();
  const { projectId } = useParams();

  const { currentProject } = useAppSelector(state => state.projectReducer); 

  const onError = (msg: string) => {
    console.log(msg);
  }

  useEffect(() => {
    dispatch(getCurrentProjectAction(projectId!, onError));
    return function() {
      dispatch(clearCurrentObject());
    }
  }, []);

  return (
    <>{currentProject && (
      <Box sx={{minHeight: 'calc(100vh - 92px)', display: 'flex'}}>
        <Paper className="container" sx={{flexGrow: 1, display: 'flex', flexDirection: 'column'}}>
          <Typography variant="subtitle1">{currentProject.title}</Typography>
          <Divider sx={{mb: 2}} />
          <LogList projectId={projectId!} />
        </Paper>
        <Box sx={{mr: 2}}></Box>
        <Paper className="container" sx={{flex: '0 0 30%', display: 'flex', flexDirection: 'column', position: 'sticky', height: 'calc(95vh - 60px)', top: '16px'}}>
          <Box>
            <Typography variant="subtitle1">Project Info</Typography>
            <Divider sx={{mb: 2}} />
          </Box>

          <Box sx={{maxWidth: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}>
            <Box>
              <LogStructure />
              <ProjectFilter />
            </Box>
            <Box flexGrow={1}></Box>
            <Box>
              <Link to={`${projectsRoute.url}/settings/${currentProject.id}`}>
                <Button sx={{ mt: 2 }} startIcon={<SettingsIcon />}>
                  <Typography color='text.primary'>Project Settings</Typography>
                </Button>
              </Link>
              <ProjectKey />
            </Box>
          </Box>
        </Paper>
      </Box>
    )}</>
  )
}
