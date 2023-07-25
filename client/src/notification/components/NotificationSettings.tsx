import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { List, ListSubheader } from '@mui/material';
import { LevelColors, ILevels } from '../../logs';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getNotificationsAction } from '../state/notification.actions';
import NotificationItem from './NotificationItem';
import ErrBanner from '../../shared/ui/ErrBanner';

const NotificationSettings = () => {
    const dispatch = useAppDispatch();
    const { projectId } = useParams();
    const { init, error } = useAppSelector((state) => state.notificationReducer);
    const levels = Object.keys(LevelColors) as ILevels[];
    const initialState: { [key: string]: boolean } = {};
    levels.forEach((level) => { initialState[level] = true; });

    useEffect(() => {
        dispatch(getNotificationsAction(projectId!));
    }, [dispatch, projectId]);

    return (
        <>
            <ErrBanner error={error} />
            {!error && (
                <List subheader={<ListSubheader component="h6">Notifications:</ListSubheader>}>
                    {init && levels.map((level) => <NotificationItem level={level} />)}
                </List>
            )}
        </>
    );
};

export default NotificationSettings;
