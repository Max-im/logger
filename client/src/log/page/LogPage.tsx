import React, { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Paper, Box, Typography, Divider, Button } from '@mui/material';
import UndoIcon from '@mui/icons-material/Undo';
import { useAppDispatch } from '../../hooks/redux';
import { readLogAction, ILog } from '../../logs';
import styles from '../styles/LogPage.module.scss';
import Label from '../../shared/ui/Label';
import LogControl from '../components/LogControl';
import { getLogDataAction } from '../state/log.actions';
import ErrBanner from '../../shared/ui/ErrBanner';
import LogDate from '../components/LogDate';
import { projectsRoute } from '../../routes';

const LogPage: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [log, setLog] = useState<null | ILog>(null);
    const [error, setError] = useState<null | string>(null);
    const { projectId, logId } = useParams();

    const onHandle = (err: null | string, value: null | ILog) => {
        if (value) setLog(value);
        else setError(err);
    };

    const onStepBack = () => {
        navigate(`${projectsRoute.url}/${projectId}`);
    };

    useEffect(() => {
        getLogDataAction(projectId!, logId!, onHandle);
        dispatch(readLogAction(projectId!, logId!));
    }, [dispatch, projectId, logId]);

    return (
        <Box display="flex">
            <Paper className={`${styles.log__main} container`}>
                <Typography variant="subtitle1">Log Info</Typography>
                <Divider className={styles.divider} />
                {log && (
                    <Typography component="p">
                        {log.value}
                    </Typography>
                )}
                <ErrBanner error={error} />
            </Paper>

            <Box mr={2} />

            <Paper className={`${styles.log__info} container`}>
                <Typography variant="subtitle1">Log Control</Typography>
                <Divider className={styles.divider} />
                {log && (
                    <Box display="flex" flexDirection="column" flex={2}>
                        <Button
                            variant="outlined"
                            startIcon={<UndoIcon />}
                            onClick={onStepBack}
                            sx={{ mb: 2 }}
                        >
                            Back to Project
                        </Button>
                        <Label level={log.level} size="medium" />
                        <LogDate log={log} />
                        <Box flexGrow={1} />
                        <LogControl log={log} />
                    </Box>
                )}
            </Paper>
        </Box>
    );
};

export default LogPage;
