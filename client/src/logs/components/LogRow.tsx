import React, { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TableRow, TableCell, Checkbox, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectAction } from '../state/log.actions';
import { ILog } from '../model/log.model';
import Label from '../../shared/ui/Label';
import styles from '../styles/LogRow.module.scss';

interface ILogProps {
  log: ILog;
}

const LogRow: FC<ILogProps> = ({ log }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { projectId } = useParams();
    const { selected } = useAppSelector((state) => state.logReducer);

    const onOpen = () => {
        navigate(`/project/${projectId}/log/${log.id}`);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(selectAction(log.id, e.target.checked));
    };

    const isSelected = Boolean(selected[log.id]);
    const selectStyle = isSelected ? styles.log__row_active : styles.log__row;
    const openedClass = log.opened ? styles.log__text_opened : styles.log__text;

    return (
        <TableRow className={selectStyle} sx={{ '&:hover': { bgcolor: 'info.main' } }}>
            <TableCell align="left">
                <Checkbox size="small" className={styles.log__nopadding} checked={isSelected} onChange={handleChange} />
            </TableCell>
            <TableCell onClick={onOpen} scope="row" className={styles.log__nopadding}>
                <Label level={log.level} />
            </TableCell>
            <TableCell onClick={onOpen} align="right">
                <Typography className={openedClass}>{log.value}</Typography>
            </TableCell>
            <TableCell onClick={onOpen} align="right">
                <Typography className={openedClass}>
                    {log.created.toDateString().replace(/^.\w+\s/, '')}
                </Typography>
            </TableCell>
        </TableRow>
    );
};

export default LogRow;
