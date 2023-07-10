import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Paper, Box, Typography, Divider } from '@mui/material';
import { useAppDispatch } from '../../hooks/redux';
import { readLogAction, ILog } from '../../logs';
import styles from '../styles/LogPage.module.scss';
import Label from '../../shared/ui/Label';
import LogControl from '../components/LogControl';
import { getLogDataAction } from '../state/log.actions';

const LogPage: FC = () => {
    const dispatch = useAppDispatch();
    const [log, setLog] = useState<null | ILog>(null);
    const { projectId, logId } = useParams();

    const onHandle = (err: undefined | string, value: undefined | ILog) => {
        if (value) setLog(value);
        else {
            console.log(err);
        }
    };

    useEffect(() => {
        getLogDataAction(projectId!, logId!, onHandle);
        dispatch(readLogAction(projectId!, logId!));
    }, [dispatch, projectId, logId]);

    return (
        <Box display="flex">
            <Paper className={`${styles.log__main} container`}>
                <Typography variant="subtitle1">Log Info</Typography>
                <Divider sx={{ mb: 2, mt: 2 }} />
                {log && <Typography component="p">{log.value}</Typography>}
            </Paper>

            <Box mr={2} />

            <Paper className={`${styles.log__info} container`}>
                <Typography variant="subtitle1">Log Control</Typography>
                <Divider sx={{ mb: 2, mt: 2 }} />
                {log && (
                    <Box display="flex" flexDirection="column" flex={2}>
                        <Label level={log.level} size="medium" />
                        <Typography component="p">{new Date(log.created).toDateString()}</Typography>
                        <Box flexGrow={1} />
                        <LogControl log={log} />
                    </Box>
                )}
            </Paper>
        </Box>
    );
};

export default LogPage;
