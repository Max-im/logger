import React, { FC } from 'react';
import { Table, TableBody, TableRow, TableCell, Box } from '@mui/material';
import { getYear, getMonth, getDay } from '../util/dateFormater';
import { ILog } from '../../logs';

const LogDate: FC<{ log: ILog }> = ({ log }) => {
    console.log(log);

    const date = log && new Date(log.created);

    return (
        <Box mt={3}>
            Created:
            <Table size="small">
                <TableBody>
                    <TableRow>
                        <TableCell align="left">Year</TableCell>
                        <TableCell align="right">{getYear(date!)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">Month</TableCell>
                        <TableCell align="right">{getMonth(date!)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">Day</TableCell>
                        <TableCell align="right">{getDay(date)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Box>
    );
};

export default LogDate;
