import React from 'react';
import {Link} from 'react-router-dom';
import { Grid, Paper, Typography, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PowerIcon from '@mui/icons-material/Power';

export default function HomeMain() {
  return (
    <Grid container spacing={2} sx={{flexGrow: 1, mb: 2}}>
      <Grid item xs={8} >
        <Paper className="container" sx={{height: '100%', p: 3, position: 'relative' }}>
          <Box sx={{position: 'absolute', width: '40%', height: '80%', bottom: 10, right: 0 ,background: `
          radial-gradient(circle, rgba(255,255,255,.3), rgba(255,255,255,.3) 1px, transparent 0, transparent) 0 0/25px 25px`}}>
          </Box>
          <Typography variant='h2'>{process.env.REACT_APP_NAME}</Typography>
          <Typography variant='h3' sx={{fontSize: 18, fontWeight: 'bold'}} color="secondary">Keep your project on track</Typography>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className="container" sx={{height: '100%'}}>
          <Typography variant='h3' sx={{fontSize: 18, fontWeight: 'bold'}} color="secondary">Start Now</Typography>
          <List>
            <Link to="/projects" color=''>
              <ListItem sx={{pl: 0}}>
                <ListItemIcon sx={{minWidth: '30px'}}>
                  <CreateNewFolderIcon sx={{opacity: 0.5}} />
                </ListItemIcon>
                <ListItemText primary="Create Project" sx={{color: 'text.primary'}} />
              </ListItem>
            </Link>
            <ListItem sx={{pl: 0}}>
              <ListItemIcon sx={{minWidth: '30px'}}>
                <VpnKeyIcon sx={{opacity: 0.5}} />
              </ListItemIcon>
              <ListItemText primary="Copy Key" sx={{color: 'text.primary'}} />
            </ListItem>
            <ListItem sx={{pl: 0}}>
              <ListItemIcon sx={{minWidth: '30px'}}>
                <NotificationsActiveIcon sx={{opacity: 0.5}} />
              </ListItemIcon>
              <ListItemText primary="Setup Notifications" sx={{color: 'text.primary'}} />
            </ListItem>
            <ListItem sx={{pl: 0}}>
              <ListItemIcon sx={{minWidth: '30px'}}>
                <PowerIcon sx={{opacity: 0.5}} />
              </ListItemIcon>
              <ListItemText primary="Plugin to your project" sx={{color: 'text.primary'}} />
            </ListItem>
          </List>
        </Paper>
      </Grid>
    </Grid>
  )
}
