import React from 'react';
import { Paper, Grid } from '@mui/material';

export default function Projects() {
  return (
    <Grid container spacing={2} sx={{minHeight: 'calc(90vh - 48px)'}}>
      <Grid item xs={8}>
        <Paper className="container"  sx={{height: '100%'}}>a</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className="container"  sx={{height: '100%'}}>a</Paper>
      </Grid>
    </Grid>
  )
}
