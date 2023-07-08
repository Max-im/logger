import React, { FC } from 'react';
import { Button, Box } from '@mui/material';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import SendIcon from '@mui/icons-material/Send';
import { ILog } from '../../logs';

const LogControl: FC<{ log: ILog }> = ({ log }) => {
    // TODO: implement
    console.log(log);

    return (
        <Box display="flex" justifyContent="space-between">
            <Button
                startIcon={<DownloadForOfflineIcon />}
                variant="outlined"
                size="small"
            >
                Download
            </Button>
            <Button startIcon={<SendIcon />} variant="outlined" size="small">Send</Button>
        </Box>
    );
};

export default LogControl;
