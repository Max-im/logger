import React, { FC, useRef } from 'react';
import { Table, TableBody, Box } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { getLogsAction } from './log.actions';
import LogRow from './log.row.component';
import useScroll from '../hooks/useScroll';

interface ILogListProps {
  projectId: string
}

const LogList: FC<ILogListProps> = ({ projectId }) => {
  const dispatch = useAppDispatch();
  const { logs } = useAppSelector(store => store.logReducer);
  const childRef = useRef();
  const intersected = useScroll(document.querySelector('.app'), childRef, getLogs)

  const arr = [];

  for (const key in logs) {
    arr.push(logs[key]);
  }
  arr.sort((a, b) => Number(b.id) - Number(a.id));

  const onError = (msg: string) => {
    console.log(msg);
  }

  function getLogs() {
      dispatch(getLogsAction(projectId, Object.keys(logs).length, onError));
  }

  return (
    <Box>
      <Table>
        <TableBody>
          {Boolean(arr.length) && arr.map((log, i) => <LogRow key={log.id} i={i} log={log} />)}
          <Box component='tr' ref={childRef} sx={{height: 1}}></Box>
        </TableBody>
      </Table>
    </Box>
  )
}

export default LogList;