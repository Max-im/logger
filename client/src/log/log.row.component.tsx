import React, {FC} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TableRow, TableCell, Checkbox, Typography, Chip } from '@mui/material';
import { ILog } from './log.model';
import { readLogAction, selectAction } from './log.actions';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { LevelColors } from './log.model';

interface ILogProps {
  log: ILog;
  i: number
}

const LogRow: FC<ILogProps> = ({ log, i }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { projectId } = useParams();

  const { selected } = useAppSelector(state => state.logReducer);

  const onOpen = () => {
    navigate(`/project/${projectId}/log/${log.id}`);
    dispatch(readLogAction(projectId!, log.id))
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(selectAction(log.id, e.target.checked));
  }

  const isSelected = Boolean(selected[log.id]);
  const rowSyle = log.opened ? {opacity: 0.7, borderLeft: '3px solid transparent'} : {bgcolor: 'info.main', borderLeft: '3px solid rgb(78, 205, 172)'};
  const selectStyle = isSelected ? {background: 'rgba(78, 205, 172, .3)', opacity: 1} : {};

  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, ...rowSyle, ...selectStyle }}>
      <TableCell align="center">
        <Typography variant='body1' component="span" color="primary" sx={{ position: 'relative', left: -20, top: 1}}>{i + 1}</Typography>
        <Checkbox size='small' sx={{p: 0}} checked={isSelected} onChange={handleChange}/>
      </TableCell>
      <TableCell onClick={onOpen} scope="row">
        {/* @ts-ignore */}
        <Chip label={log.level} size='small' sx={{background: LevelColors[log.level].bg, border: `1px solid ${LevelColors[log.level].color}`, textShadow: '1px 1px 1px black'}} />
      </TableCell>
      <TableCell onClick={onOpen} align="right">{log.value}</TableCell>
      <TableCell onClick={onOpen} align="right">{log.created.toDateString().replace(/^.\w+\s/, '')}</TableCell>
    </TableRow>
  )
}

export default LogRow;