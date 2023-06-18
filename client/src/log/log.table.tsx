import React, { useEffect, FC } from 'react';
import { Table, TableBody } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { getLogsAction } from './log.actions';
import LogRow from './log.row.component';

interface ILogListProps {
  projectId: string
}

const LogList: FC<ILogListProps> = ({ projectId }) => {
  const dispatch = useAppDispatch();
  const { logs } = useAppSelector(store => store.logReducer);

  const logIds = Object.keys(logs);
  const arr = [];

  for (const key in logs) {
    arr.push(logs[key]);
  }
  arr.sort((a, b) => Number(b.id) - Number(a.id));

  const onError = (msg: string) => {
    console.log(msg);
  }

  useEffect(() => {
    dispatch(getLogsAction(projectId, onError));
  }, []);

  return (
    <Table>
      <TableBody>
        {Boolean(arr.length) && arr.map((log, i) => <LogRow key={log.id} i={i} log={log} />)}
      </TableBody>
    </Table>
  )
}

export default LogList;