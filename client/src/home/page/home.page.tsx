import React, { useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';
import {
    Grid, Box, Paper, Button, Typography,
} from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { PlanWidget } from '../../plan';
import { initAction } from '../state/home.actions';
import HomePros from '../components/home.pros.component';
import HomeMain from '../components/home.main.component';

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
    const stat = useAppSelector((state) => state.homeReducer);

    const onError = (msg: string) => {
        console.log(msg);
    };

    useEffect(() => {
        dispatch(initAction(onError));
    }, [dispatch]);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <HomePros />
            <HomeMain />

            <Grid container spacing={2} sx={{ flex: '0 0 200px' }}>
                <Grid item xs={4}>
                    <Paper className="container" sx={{ height: '100%' }}>
                        <PlanWidget />
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className="container" sx={{ height: '100%' }}>
                        {stat.loaded && <Doughnut data={data} />}
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className="container" sx={{ height: '100%' }}>
                        <Typography
                            variant="h3"
                            sx={{ fontSize: 18, fontWeight: 'bold' }}
                            color="secondary"
                        >
                            Like what we do? Support us!
                        </Typography>

                        <Typography sx={{ mt: 2, mb: 3 }}>
                            Your contribution helps us continue delivering quality services.
                        </Typography>

                        <a
                            href="https://www.patreon.com/max_im"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Button variant="outlined" sx={{ width: '100%' }}>
                                <span role="img" aria-label="folded hands">
                                    🙏
                                </span>
                                Donate
                            </Button>
                        </a>

                        <Typography sx={{ mt: 2 }}>
                            Join us on this amazing journey. Thank you!
                        </Typography>

                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Home;
