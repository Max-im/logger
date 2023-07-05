import React, { useState } from 'react';
import {
    Paper, ListItem, Box, List, ListItemButton, ListSubheader, ListItemIcon, ListItemText, Collapse, Switch,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { LevelColors } from '../../logs';

const ProjectSettings = () => {
    const levels = Object.keys(LevelColors);
    const initialState: { [key: string]: boolean } = {};
    levels.forEach((level) => { initialState[level] = true; });
    const [collapse, setCollapse] = useState<{ [key: string]: boolean }>(initialState);

    const onCollapse = (level: string) => {
        const newState = { ...collapse, [level]: !collapse[level] };
        setCollapse(newState);
    };

    const getLevelStyles = (level: string) => ({
        mr: 2,
        width: '20px',
        height: '20px',
        // @ts-ignore
        bgcolor: LevelColors[level].bg,
        // @ts-ignore
        border: `1px solid ${LevelColors[level].color}`,
    });

    return (
        <Paper sx={{ height: 'calc(100vh - 92px)', display: 'flex', flexDirection: 'column' }}>
            <Box className="container" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <List subheader={<ListSubheader component="h6">Notifications:</ListSubheader>}>
                    {levels.map((level) => (
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
                                        <Switch defaultChecked />
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </Box>
                    ))}
                </List>
            </Box>
        </Paper>
    );
};

export default ProjectSettings;
