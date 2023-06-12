import React from 'react';
import { Box, Grid } from '@mui/material';

export default function Projects() {
  return (
    <Grid container spacing={2} sx={{minHeight: 'calc(90vh - 48px)'}}>
      <Grid item xs={8}>
        <Box className="container"  sx={{height: '100%'}}>a</Box>
      </Grid>
      <Grid item xs={4}>
        <Box className="container"  sx={{height: '100%'}}>a</Box>
      </Grid>
    </Grid>
  )
}
