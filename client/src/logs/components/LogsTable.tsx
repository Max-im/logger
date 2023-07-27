import React, { FC, useRef } from 'react';
import { Table, TableBody, Box } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { getLogsAction } from '../state/log.actions';
import useScroll from '../../hooks/useScroll';
import useQuery from '../../hooks/useQuery';
import LogRow from './LogRow';
import LogsHeader from './LogsHeader';
import ErrBanner from '../../shared/ui/ErrBanner';

interface ILogTableProps {
  projectId: string
}

const LogsTable: FC<ILogTableProps> = ({ projectId }) => {
    const dispatch = useAppDispatch();
    const query = useQuery();
    const { logs, error } = useAppSelector((store) => store.logReducer);
    const childRef = useRef();

    const arr = [];

    for (const key in logs) {
        arr.push(logs[key]);
    }
    arr.sort((a, b) => Number(b.id) - Number(a.id));

    function getLogs() {
        const params = {
            projectId,
            skip: Object.keys(logs).length,
            filterVal: query.get('filter'),

        };
        dispatch(getLogsAction(params));
    }

    // eslint-disable-next-line no-unused-vars
    const intersected = useScroll(document, childRef, getLogs);

    return (
        <>
            <ErrBanner error={error} />
            <Table size="small">
                <LogsHeader />
                <TableBody>
                    {arr.map((log) => <LogRow key={log.id} log={log} />)}

                    <Box component="tr" ref={childRef} height={1} />
                </TableBody>
            </Table>
        </>
    );
};

export default LogsTable;
