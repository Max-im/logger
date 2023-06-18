import React, {FC, useState} from 'react';
import { useParams } from 'react-router-dom';
import { TableRow, TableCell, Checkbox, Typography, Modal, Box } from '@mui/material';
import { ILog } from './log.model';
import { readLogAction, selectAction } from './log.actions';
import { useAppDispatch, useAppSelector } from '../hooks/redux';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  textAlign: 'center',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface ILogProps {
  log: ILog;
  i: number
}

const LogRow: FC<ILogProps> = ({ log, i }) => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState<boolean>(false);
  const { projectId } = useParams();

  const { selected } = useAppSelector(state => state.logReducer);

  const onOpen = () => {
    setOpen(true);
    dispatch(readLogAction(projectId!, log.id))
  }
  
  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(selectAction(log.id, e.target.checked));
  }

  const rowSyle = log.opened ? {opacity: 0.7} : {background: 'rgba(0,0,0,.4)'};

  return (
    <>
      <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, ...rowSyle }}>
        <TableCell align="center">
          <Typography variant='body1' component="span" color="primary" sx={{ position: 'relative', left: -20, top: 1}}>{i + 1}</Typography>
          <Checkbox size='small' sx={{p: 0}} checked={Boolean(selected[log.id])} onChange={handleChange}/>
        </TableCell>
        <TableCell onClick={onOpen} scope="row">{log.level}</TableCell>
        <TableCell onClick={onOpen} align="right">{log.value}</TableCell>
        <TableCell onClick={onOpen} align="right">{log.created.toDateString().replace(/^.\w+\s/, '')}</TableCell>
      </TableRow>
      <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">Log</Typography>

      </Box>
    </Modal>
  </>
  )
}

export default LogRow;