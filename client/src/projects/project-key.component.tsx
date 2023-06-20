import React, { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Alert, Box, Button, Chip, Snackbar, Tooltip } from '@mui/material';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { deleteLogsAction } from '../log/log.actions';

const ProjectKey: FC = () => {
    const dispatch = useAppDispatch();
    const [showMsg, setShowMsg] = useState<boolean>(false);
    const { currentProject } = useAppSelector(state => state.projectReducer); 
    const { selected } = useAppSelector(state => state.logReducer);

    const { projectId } = useParams();

    const selectedIds = Object.keys(selected).filter(id => selected[id]);

    const disabledDeleteBtn = selectedIds.length > 0 ? {} : {disabled: true};

    const onDeleteLogs = () => {
        dispatch(deleteLogsAction(projectId!, selectedIds));
    }

    const onKeyClick = (e: any) => {
        navigator.clipboard.writeText(currentProject!.id);
        setShowMsg(true);
    }

    const onCloseMsg = () => {
        setShowMsg(false);
    }

    return (
        <>
        {currentProject &&
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
            }
            <Snackbar open={showMsg} autoHideDuration={3000} onClose={onCloseMsg} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                <Alert severity="success" sx={{ width: '100%' }}>
                    Id copied
                </Alert>
            </Snackbar>
        </>
    )
}

export default ProjectKey;
