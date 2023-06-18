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

  const onError = (msg: string) => {
    console.log(msg);
  }

  useEffect(() => {
    dispatch(getLogsAction(projectId, onError));
  }, []);

  return (
    <Table>
      <TableBody>
        {Boolean(logIds.length) && logIds.map((id, i) => <LogRow key={id} i={i} log={logs[id]} />)}
      </TableBody>
    </Table>
  )
}

export default LogList;