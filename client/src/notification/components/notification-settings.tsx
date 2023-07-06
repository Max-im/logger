import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    Box, List, ListItemButton, ListSubheader, ListItemIcon, ListItemText, Collapse, Switch, Divider,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { LevelColors, ILevels } from '../../logs';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
    getNotificationsAction, createNotificationAction, deleteNotificationAction,
} from '../state/notification.actions';

const NotificationSettings = () => {
    const dispatch = useAppDispatch();
    const { projectId } = useParams();
    const { active, init } = useAppSelector((state) => state.notificationReducer);
    const levels = Object.keys(LevelColors) as ILevels[];
    const initialState: { [key: string]: boolean } = {};
    levels.forEach((level) => { initialState[level] = true; });
    const [collapse, setCollapse] = useState<{ [key: string]: boolean }>(initialState);

    const onError = (msg: string) => {
        console.log(msg);
    };

    useEffect(() => {
        dispatch(getNotificationsAction(projectId!, onError));
    }, [dispatch, projectId]);

    const onCollapse = (level: string) => {
        const newState = { ...collapse, [level]: !collapse[level] };
        setCollapse(newState);
    };

    const onToggleNotification = (e: React.ChangeEvent<HTMLInputElement>, level: ILevels) => {
        if (e.target.checked) {
            dispatch(createNotificationAction(projectId!, level, onError));
        } else {
            const val = active.find((notification) => notification.logLevel === level);
            if (!val) {
                onError('Please try again');
            } else {
                dispatch(deleteNotificationAction(val.id, projectId!, onError));
            }
        }
    };

    const getLevelStyles = (level: ILevels) => ({
        mr: 2,
        width: '20px',
        height: '20px',
        bgcolor: LevelColors[level].bg,
        border: `1px solid ${LevelColors[level].color}`,
    });

    return (
        <List subheader={<ListSubheader component="h6">Notifications:</ListSubheader>}>
            {init && levels.map((level) => (
                <Box key={level}>
                    <ListItemButton onClick={() => onCollapse(level)}>
                        <Box sx={getLevelStyles(level)} />
                        <ListItemText primary={level} />
                        { collapse[level] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={collapse[level]} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <MailOutlineIcon />
                                </ListItemIcon>
                                <ListItemText primary="Email Notification" />
                                <Switch
                                    checked={Boolean(active.find((notification) => notification.logLevel === level))}
                                    onChange={(e) => onToggleNotification(e, level)}
                                />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <Divider />
                </Box>
            ))}
        </List>
    );
};

export default NotificationSettings;
