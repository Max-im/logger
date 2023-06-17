import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Paper, Grid, Typography, Divider, Chip, Tooltip, Snackbar, Alert } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { projectsRoute } from '../routes';
import { getCurrentProjectAction } from './projects.actions';

export default function ProjectPage() {
  const [showMsg, setShowMsg] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { projectId } = useParams();

  const { currentProject } = useAppSelector(state => state.projectReducer)

  const onCloseMsg = () => {
    setShowMsg(false);
  }

  const onKeyClick = (e: any) => {
    navigator.clipboard.writeText(currentProject!.id);
    setShowMsg(true);
  }

  const onError = (msg: string) => {
    console.log(msg);
  }

  useEffect(() => {
    dispatch(getCurrentProjectAction(projectId!, onError));
  }, []);

  return (
    <>{currentProject && (
      <>
      <Grid container spacing={2} sx={{minHeight: 'calc(90vh - 48px)'}}>
        <Grid item xs={8}>
          <Paper className="container" sx={{height: '100%'}}>
            <Typography variant="subtitle1">{currentProject.title.toUpperCase()}</Typography>
            <Divider sx={{mb: 2}}/>
            <Typography variant="body1">{currentProject.description}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className="container" sx={{height: '100%'}}>
            <Typography variant="subtitle1">Project Info</Typography>
            <Divider sx={{mb: 2}} />
            <Typography variant="body1">
              To access your project programmatically, please make use of the ID property. 
              <Tooltip title="Click to Copy">
                <Chip label={currentProject.id} sx={{m: 1}} size="small" variant="outlined" onClick={onKeyClick} />
              </Tooltip>
              You can find more information about app usage by referring to the provided resources.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Snackbar open={showMsg} autoHideDuration={3000} onClose={onCloseMsg} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Alert severity="success" sx={{ width: '100%' }}>
          Id copied
        </Alert>
      </Snackbar>
      </>
    )}</>
  )
}
