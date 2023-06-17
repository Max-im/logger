import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Paper, Grid, Typography, Divider, Chip, Tooltip, Snackbar, Alert } from '@mui/material';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { getCurrentProjectAction } from './projects.actions';
import LogList from '../log/log.component';
import LogStructure from '../log/log.structure.diagram';

export default function ProjectPage() {
  const [showMsg, setShowMsg] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { projectId } = useParams();

  const { currentProject } = useAppSelector(state => state.projectReducer); 

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
      <Grid container spacing={2} sx={{minHeight: 'calc(90vh - 60px)'}}>
        <Grid item xs={8}>
          <Paper className="container" sx={{height: '100%'}}>
            <Typography variant="subtitle1">{currentProject.title.toUpperCase()}</Typography>
            <Divider sx={{mb: 2}}/>
            <LogList projectId={projectId!} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className="container" sx={{height: '100%'}}>
            <Typography variant="subtitle1">Project Info</Typography>
            <Divider sx={{mb: 2}} />
            <LogStructure />

            <Typography variant="body1" sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <Tooltip title="Access key">
                <VpnKeyIcon color="primary"/>
              </Tooltip>
              <Tooltip title="Click to Copy">
                <Chip label={currentProject.id} sx={{m: 1}} size="small" variant="outlined" onClick={onKeyClick} />
              </Tooltip>
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
