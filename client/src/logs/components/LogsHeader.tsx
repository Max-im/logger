import React, { FC } from 'react';
import { TableHead, TableRow, TableCell, Checkbox } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { selectAllAction } from '../state/log.actions';
import styles from '../styles/LogRow.module.scss';

const LogsHeader: FC = () => {
    const dispatch = useAppDispatch();
    const { logs, selectAll } = useAppSelector((store) => store.logReducer);

    const arr = [];

    for (const key in logs) {
        arr.push(logs[key]);
    }

    arr.sort((a, b) => Number(b.id) - Number(a.id));

    const onSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(selectAllAction(e.target.checked));
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell align="left">
                    <Checkbox
                        className={styles.log__nopadding}
                        checked={selectAll}
                        onChange={onSelectAll}
                    />
                </TableCell>
                <TableCell>Label</TableCell>
                <TableCell align="right">Info</TableCell>
                <TableCell align="right">Date</TableCell>
            </TableRow>
        </TableHead>
    );
};

export default LogsHeader;
