import React from 'react'
import { Grid,  Paper, Typography } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

export default function HomePros() {
  return (
    <Grid container spacing={2} sx={{flex: '0 0 100px', mb:2}} >
        <Grid item xs={3} sx={{height: '100%'}}>
          <Paper className="container" sx={{height: '100%'}}>
            <RocketLaunchIcon sx={{fontSize: 24, mb: 1}} color="primary" />
            <Typography variant='body2'>Start in just few clicks</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className="container" sx={{height: '100%'}}>
            <CardGiftcardIcon sx={{fontSize: 24, mb: 1}} color="primary" />
            <Typography variant='body2'>Free plan</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className="container" sx={{height: '100%'}}>
            <AccountTreeIcon sx={{fontSize: 24, mb: 1}} color="primary" />
            <Typography variant='body2'>Multi projects support</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className="container" sx={{height: '100%'}}>
            <NotificationsActiveIcon sx={{fontSize: 24, mb: 1}} color="primary" />
            <Typography variant='body2'>Errors notifications</Typography>
          </Paper>
        </Grid>
      </Grid>
  )
}
