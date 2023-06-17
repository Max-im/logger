import React, {FC, useState} from 'react'
import { TableRow, TableCell } from '@mui/material';
import { ILog } from './log.model';

const LogRow: FC<{log: ILog}> = ({ log }) => {
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell scope="row">{log.level}</TableCell>
      <TableCell align="right">{log.value}</TableCell>
      <TableCell align="right">{log.created.getTime()}</TableCell>
    </TableRow>
  )
}

export default LogRow;