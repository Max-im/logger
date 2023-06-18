import React, {useEffect} from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Grid, Box, Paper, Typography } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { initAction } from './home.actions';
import HomePros from './home.pros.component';
import HomeMain from './home.main.component';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      // label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

function Home() {
  const dispatch = useAppDispatch();
  const stat = useAppSelector(state => state.homeReducer);

  const onError = (msg: string) => {
    console.log(msg)
  }

  useEffect(()=>{
    dispatch(initAction(onError))
  }, []);
  
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', minHeight: 'calc(90vh - 60px)'}}>
      <HomePros />
      <HomeMain />

      <Grid container spacing={2} sx={{flex: '0 0 200px'}}>
        <Grid item xs={4}>
          <Paper className="container" sx={{height: '100%'}}>
            <Typography variant='h3' sx={{fontSize: 18, fontWeight: 'bold'}} color="secondary">Plans</Typography>
            
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className="container" sx={{height: '100%'}}>
          {stat.loaded && <Doughnut data={data} />}
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className="container" sx={{height: '100%'}}>a</Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
