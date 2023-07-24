import React, { FC } from 'react';
import { Button, Box } from '@mui/material';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import ShareIcon from '@mui/icons-material/Share';
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
            <Button startIcon={<ShareIcon />} variant="outlined" size="small">Share</Button>
        </Box>
    );
};

export default LogControl;
