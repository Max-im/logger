import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { deleteLogsAction } from '../state/log.actions';

const DeleteLogsWidget: FC = () => {
    const dispatch = useAppDispatch();
    const { currentProject } = useAppSelector((state) => state.projectReducer);
    const { selected } = useAppSelector((state) => state.logReducer);
    const { projectId } = useParams();
    const selectedIds = Object.keys(selected).filter((id) => selected[id]);
    const disabledDeleteBtn = selectedIds.length > 0 ? {} : { disabled: true };

    const onDeleteLogs = () => {
        dispatch(deleteLogsAction(projectId!, selectedIds));
    };

    return (
        <Box>
            {currentProject
                && (
                    <Button
                        sx={{ mt: 1 }}
                        variant="outlined"
                        color="error"
                        fullWidth
                        size="small"
                        {...disabledDeleteBtn}
                        onClick={onDeleteLogs}
                    >
                        Delete Selected
                    </Button>
                )}
        </Box>
    );
};

export default DeleteLogsWidget;
