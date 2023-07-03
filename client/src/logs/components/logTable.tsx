import React, { FC, useRef } from 'react';
import { Table, TableBody, Box, TableHead, TableRow, TableCell, Checkbox } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { getLogsAction, selectAllAction } from '../state/log.actions'
import useScroll from '../../hooks/useScroll';
import useQuery from '../../hooks/useQuery';
import LogRow from './logRow';

interface ILogTableProps {
  projectId: string
}

const LogTable: FC<ILogTableProps> = ({ projectId }) => {
  const dispatch = useAppDispatch();
  const query = useQuery();
  const { logs, selectAll } = useAppSelector(store => store.logReducer);
  const childRef = useRef();
  const intersected = useScroll(document, childRef, getLogs)

  const arr = [];

  for (const key in logs) {
    arr.push(logs[key]);
  }
  arr.sort((a, b) => Number(b.id) - Number(a.id));

  const onError = (msg: string) => {
    console.log(msg);
  }

  function getLogs() {
      dispatch(getLogsAction(projectId, Object.keys(logs).length, query.get('filter'), onError));
  }

  const onSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(selectAllAction(e.target.checked))
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align='left'><Checkbox sx={{p:0}} checked={selectAll} onChange={onSelectAll} /></TableCell>
          <TableCell>Label</TableCell>
          <TableCell align="right">Info</TableCell>
          <TableCell align="right">Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Boolean(arr.length) && arr.map((log, i) => <LogRow key={log.id} i={i} log={log} />)}
        <Box component='tr' ref={childRef} sx={{height: 1}}></Box>
      </TableBody>
    </Table>
  )
}

export default LogTable;