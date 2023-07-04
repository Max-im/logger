import React, { FC, useState } from 'react';
import {
    Alert, Box, Button, Snackbar, Tooltip, Typography,
} from '@mui/material';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const ProjectKey: FC<{id: string}> = ({ id }) => {
    const [showMsg, setShowMsg] = useState<boolean>(false);

    const onKeyClick = (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText(id);
        setShowMsg(true);
    };

    const onCloseMsg = () => {
        setShowMsg(false);
    };

    return (
        <>
            <Box>
                <Tooltip title="Click to Copy">
                    <Button startIcon={<VpnKeyIcon />} onClick={onKeyClick}>
                        <Typography color="text.primary">{id}</Typography>
                    </Button>
                </Tooltip>
            </Box>
            <Snackbar
                open={showMsg}
                autoHideDuration={3000}
                onClose={onCloseMsg}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert severity="success" sx={{ width: '100%' }}>
                    Id copied
                </Alert>
            </Snackbar>
        </>
    );
};

export default ProjectKey;
