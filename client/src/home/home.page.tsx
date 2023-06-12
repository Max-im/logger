import React from 'react';
import { Grid, Box, Paper } from '@mui/material';

function Home() {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', minHeight: 'calc(90vh - 48px)'}}>
      <Grid container spacing={2} sx={{mb: 2, flex: '0 0 100px'}} >
        <Grid item xs={3} sx={{height: '100%'}}>
          <Paper className="container" sx={{height: '100%'}}>a</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className="container" sx={{height: '100%'}}>a</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className="container" sx={{height: '100%'}}>a</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className="container" sx={{height: '100%'}}>a</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{mb: 2, flexGrow: 1}}>
        <Grid item xs={8}>
          <Paper className="container" sx={{height: '100%'}}>a</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className="container" sx={{height: '100%'}}>a</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{flex: '0 0 200px'}}>
        <Grid item xs={4}>
          <Paper className="container"  sx={{height: '100%'}}>a</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className="container"  sx={{height: '100%'}}>a</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className="container"  sx={{height: '100%'}}>a</Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
