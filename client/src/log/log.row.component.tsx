import React, {FC} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TableRow, TableCell, Checkbox, Typography, Chip } from '@mui/material';
import { ILog } from './log.model';
import { selectAction } from './log.actions';
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
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(selectAction(log.id, e.target.checked));
  }

  const isSelected = Boolean(selected[log.id]);
  const selectStyle = isSelected ? {background: 'rgba(255, 255, 255, .24)'} : {};
  const labelBg = log.opened ? {} : {background: LevelColors[log.level].bg}

  return (
    <TableRow sx={{ '&:last-child tr, &:last-child th': { border: 0 }, ...selectStyle, cursor: 'pointer', '&:hover': {bgcolor: 'info.main'} }}>
      <TableCell align="left">
        <Checkbox size='small' sx={{p: 0}} checked={isSelected} onChange={handleChange}/>
      </TableCell>
      <TableCell onClick={onOpen} scope="row" sx={{p: 0}}>
        {/* @ts-ignore */}
        <Chip variant='outlined' label={log.level} size='small' sx={{...labelBg, border: `1px solid ${LevelColors[log.level].color}`}} />
      </TableCell>
      <TableCell onClick={onOpen} align="right">
        <Typography sx={log.opened ? {color: 'gray', textOverflow: 'ellipsis'} : {fontWeight: 'bold', textOverflow: 'ellipsis'}}>{log.value}</Typography>
      </TableCell>
      <TableCell onClick={onOpen} align="right">
        <Typography sx={log.opened ? {color: 'gray'} : {fontWeight: 'bold'}}>{log.created.toDateString().replace(/^.\w+\s/, '')}</Typography>
      </TableCell>
    </TableRow>
  )
}

export default LogRow;