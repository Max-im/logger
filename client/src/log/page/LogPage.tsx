import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Paper, Box, Typography, Divider, Table, TableBody, TableRow, TableCell } from '@mui/material';
import { useAppDispatch } from '../../hooks/redux';
import { readLogAction, ILog } from '../../logs';
import styles from '../styles/LogPage.module.scss';
import Label from '../../shared/ui/Label';
import LogControl from '../components/LogControl';
import { getLogDataAction } from '../state/log.actions';
import ErrBanner from '../../shared/ui/ErrBanner';
import { getYear } from '../util/dateFormater';

const LogPage: FC = () => {
    const dispatch = useAppDispatch();
    const [log, setLog] = useState<null | ILog>(null);
    const [error, setError] = useState<null | string>(null);
    const { projectId, logId } = useParams();

    const onHandle = (err: null | string, value: null | ILog) => {
        if (value) setLog(value);
        else setError(err);
    };

    useEffect(() => {
        getLogDataAction(projectId!, logId!, onHandle);
        dispatch(readLogAction(projectId!, logId!));
    }, [dispatch, projectId, logId]);

    const date = log && new Date(log.created);

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
                        <Label level={log.level} size="medium" />
                        <Table size="small" sx={{ mt: 2 }}>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="left">Year</TableCell>
                                    <TableCell align="right">{getYear(date!)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left">Month</TableCell>
                                    <TableCell align="right">{date!.getMonth()}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left">Day</TableCell>
                                    <TableCell align="right">{date!.getDate()}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        <Box flexGrow={1} />
                        <LogControl log={log} />
                    </Box>
                )}
            </Paper>
        </Box>
    );
};

export default LogPage;
