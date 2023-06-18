import React, {FC, useState} from 'react'
import { TableRow, TableCell, Checkbox, Typography } from '@mui/material';
import { ILog } from './log.model';
import { selectAction } from './log.actions';
import { useAppDispatch, useAppSelector } from '../hooks/redux';

interface ILogProps {
  log: ILog;
  i: number
}

const LogRow: FC<ILogProps> = ({ log, i }) => {
  const dispatch = useAppDispatch();

  const { selected } = useAppSelector(state => state.logReducer);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(selectAction(log.id, e.target.checked));
  }

  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell align="center">
        <Typography variant='body1' component="span" color="primary" sx={{ position: 'relative', left: -20, top: 1}}>{i + 1}</Typography>
        <Checkbox size='small' sx={{p: 0}} checked={Boolean(selected[log.id])} onChange={handleChange}/>
      </TableCell>
      <TableCell scope="row">{log.level}</TableCell>
      <TableCell align="right">{log.value}</TableCell>
      <TableCell align="right">{log.created.toDateString().replace(/^.\w+\s/, '')}</TableCell>
    </TableRow>
  )
}

export default LogRow;