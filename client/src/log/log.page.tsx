import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Paper, Button, Box, Typography, Chip } from '@mui/material';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import SendIcon from '@mui/icons-material/Send';
import { useAppDispatch } from '../hooks/redux';
import { readLogAction } from './log.actions';
import { ILog, LevelColors } from './log.model';
import api from '../services/http';
import { GET_LOGS_URL } from '../constants';

const LogPage: FC = () => {
  const dispatch = useAppDispatch();
  const [log, setLog] = useState<null | ILog>(null)
  const { projectId, logId } = useParams();


  const getLogData = async () => {
    try {
      const response = await api.get<{log: ILog}>(`${GET_LOGS_URL}/${projectId}/log/${logId}`);
      setLog(response.data.log);
    } catch(err) {
      console.log(err);
    }

  }


  useEffect(() => {
    getLogData();
    dispatch(readLogAction(projectId!, logId!));
  }, []);

  return (
    <Box sx={{display: 'flex'}}>
      <Paper className="container" sx={{height: 'calc(100vh - 92px)', flex: '1 1 70%', display: 'flex'}}>
        {log && 
          <Typography component='p'>{log.value}</Typography>
        }
      </Paper>
      <Box sx={{mr: 2}}></Box>
      <Paper className="container" sx={{flex: '0 0 30%', display: 'flex', flexDirection: 'column'}}>
        {log && 
          <>
            <Chip variant='outlined' label={log.level} sx={{background: LevelColors[log.level].bg, border: `1px solid ${LevelColors[log.level].color}`}} />
            <Typography component='p'>{new Date(log.created).toDateString()}</Typography>
            <Box flexGrow={1}></Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
              <Button startIcon={<DownloadForOfflineIcon />} variant='outlined' size="small">Download</Button>
              <Button startIcon={<SendIcon />} variant='outlined' size="small">Send</Button>
            </Box>

          </>
        }
      </Paper>
    </Box>
  )
}

export default LogPage;
