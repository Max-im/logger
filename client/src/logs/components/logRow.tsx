import React, { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    TableRow, TableCell, Checkbox, Typography, Chip,
} from '@mui/material';
import { ILog } from '../model/log.model';
import { selectAction } from '../state/log.actions';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { LevelColors } from '../../logs';

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
    const selectedCommon = {
        '&:last-child tr, &:last-child th': { border: 0 }, cursor: 'pointer', '&:hover': { bgcolor: 'info.main' },
    };
    const selectStyle = isSelected
        ? { background: 'rgba(255, 255, 255, .24)', ...selectedCommon }
        : selectedCommon;
    const labelBg = log.opened ? {} : { background: LevelColors[log.level].bg };

    return (
        <TableRow sx={selectStyle}>
            <TableCell align="left">
                <Checkbox size="small" sx={{ p: 0 }} checked={isSelected} onChange={handleChange} />
            </TableCell>
            <TableCell onClick={onOpen} scope="row" sx={{ p: 0 }}>
                {/* @ts-ignore */}
                <Chip
                    variant="outlined"
                    label={log.level}
                    size="small"
                    sx={{ ...labelBg, border: `1px solid ${LevelColors[log.level].color}` }}
                />
            </TableCell>
            <TableCell onClick={onOpen} align="right">
                <Typography sx={log.opened ? { color: 'gray' } : { fontWeight: 'bold' }}>
                    {log.value}
                </Typography>
            </TableCell>
            <TableCell onClick={onOpen} align="right">
                <Typography sx={log.opened ? { color: 'gray' } : { fontWeight: 'bold' }}>
                    {log.created.toDateString().replace(/^.\w+\s/, '')}
                </Typography>
            </TableCell>
        </TableRow>
    );
};

export default LogRow;
