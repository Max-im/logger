import React, { FC, useState } from 'react';
import {
    Alert, Box, Button, Snackbar, Tooltip, Typography,
} from '@mui/material';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useAppSelector } from '../../hooks/redux';

const ProjectKey: FC = () => {
    const [showMsg, setShowMsg] = useState<boolean>(false);
    const { currentProject } = useAppSelector((state) => state.projectReducer);

    const onKeyClick = () => {
        navigator.clipboard.writeText(currentProject!.id);
        setShowMsg(true);
    };

    const onCloseMsg = () => {
        setShowMsg(false);
    };

    return (
        <>
            {currentProject
            && (
                <Box>
                    <Tooltip title="Click to Copy">
                        <Button startIcon={<VpnKeyIcon />} onClick={onKeyClick}>
                            <Typography color="text.primary">{currentProject.id}</Typography>
                        </Button>
                    </Tooltip>
                </Box>
            )}
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
