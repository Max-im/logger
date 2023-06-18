import React, { useEffect, FC, useState } from 'react';
import { Table, TableBody, TableHead, TableRow, TableCell } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { getLogsAction } from './log.actions';
import LogRow from './log.row.component';

interface ILogListProps {
  projectId: string
}

type IStep = 10 | 20 | 50;

const LogList: FC<ILogListProps> = ({ projectId }) => {
  const [step, setStep] = useState<IStep>(10);
  const dispatch = useAppDispatch();
  const { logs } = useAppSelector(store => store.logReducer);

  const logIds = Object.keys(logs);
  const onOpenLog = (id: string) => {}

  const onError = (msg: string) => {
    console.log(msg);
  }

  useEffect(() => {
    dispatch(getLogsAction(projectId, onError));
  }, []);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Status</TableCell>
          <TableCell align="right">Data</TableCell>
          <TableCell align="right">Created</TableCell>
        </TableRow>
      </TableHead>
        <TableBody>
        {Boolean(logIds.length) && logIds.map((id) => <LogRow key={id} log={logs[id]} />)}
      </TableBody>
    </Table>
  )
}

export default LogList;