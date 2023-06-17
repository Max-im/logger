import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useAppSelector } from '../hooks/redux';
import { ILog } from './log.model';

export default function LogList() {
  const { logs } = useAppSelector(store => store.logReducer);

  const onOpenLog = (id: string) => {}

  return (
    <List>
      {logs.length && logs.map((log: ILog) => (
        <ListItem disablePadding key={log.id} sx={{m: 0}} onClick={() => onOpenLog(log.id)}>
          {/* <ListItemIcon sx={{minWidth: 40, opacity: 0.3}}>
            <item.icon />
          </ListItemIcon> */}
          <ListItemText primary={log.value} />
        </ListItem>
      ))}
    </List>
  )
}
