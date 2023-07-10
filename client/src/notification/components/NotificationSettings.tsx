import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { List, ListSubheader } from '@mui/material';
import { LevelColors, ILevels } from '../../logs';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getNotificationsAction } from '../state/notification.actions';
import NotificationItem from './NotificationItem';

const NotificationSettings = () => {
    const dispatch = useAppDispatch();
    const { projectId } = useParams();
    const { init } = useAppSelector((state) => state.notificationReducer);
    const levels = Object.keys(LevelColors) as ILevels[];
    const initialState: { [key: string]: boolean } = {};
    levels.forEach((level) => { initialState[level] = true; });

    const onError = (msg: string) => {
        console.log(msg);
    };

    useEffect(() => {
        dispatch(getNotificationsAction(projectId!, onError));
    }, [dispatch, projectId]);

    return (
        <List subheader={<ListSubheader component="h6">Notifications:</ListSubheader>}>
            {init && levels.map((level) => <NotificationItem level={level} />)}
        </List>
    );
};

export default NotificationSettings;
