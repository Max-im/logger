import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Paper, Typography, Divider, Chip, Tooltip, Snackbar, Alert, Box, Button } from '@mui/material';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { getCurrentProjectAction } from './projects.actions';
import LogList from '../log/log.table';
import LogStructure from '../log/log.structure.diagram';
import { deleteLogsAction } from '../log/log.actions';

export default function ProjectPage() {
  const [showMsg, setShowMsg] = useState<boolean>(false);
  const { selected } = useAppSelector(state => state.logReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { projectId } = useParams();

  const { currentProject } = useAppSelector(state => state.projectReducer); 

  const selectedIds = Object.keys(selected).filter(id => selected[id]);
  const disabledDeleteBtn = selectedIds.length > 0 ? {} : {disabled: true};

  const onDeleteLogs = () => {
    dispatch(deleteLogsAction(projectId!, selectedIds));
  }

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
      <Box sx={{height: 'calc(100vh - 92px)', display: 'flex'}}>
        <Paper className="container" sx={{flexGrow: 1, display: 'flex', flexDirection: 'column', overflowY: 'scroll'}}>
          <LogList projectId={projectId!} />
        </Paper>
        <Box sx={{mr:2}}></Box>
        <Paper className="container" sx={{flex: '0 0 30%', display: 'flex', flexDirection: 'column'}}>
          <Box>
            <Typography variant="subtitle1">Project Info</Typography>
            <Divider sx={{mb: 2}} />
          </Box>

          <Box sx={{maxWidth: '240px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}>
            <LogStructure />
            <Box>
              <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Tooltip title="Access key">
                  <VpnKeyIcon color="primary"/>
                </Tooltip>
                <Tooltip title="Click to Copy">
                  <Chip label={currentProject.id} sx={{m: 1}} size="small" variant="outlined" onClick={onKeyClick} />
                </Tooltip>
              </Box>
              <Button variant="outlined" color="error" fullWidth size="small" {...disabledDeleteBtn} onClick={onDeleteLogs}>Delete Selected</Button>
            </Box>
          </Box>
        </Paper>
        <Snackbar open={showMsg} autoHideDuration={3000} onClose={onCloseMsg} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
          <Alert severity="success" sx={{ width: '100%' }}>
            Id copied
          </Alert>
        </Snackbar>
      </Box>
    )}</>
  )
}
