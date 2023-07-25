import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Grid, Paper } from '@mui/material';
import { useAppSelector } from '../../hooks/redux';
import { PlanWidget } from '../../plan';
import { DonateWidget } from '../../donate';
import ErrBanner from '../../shared/ui/ErrBanner';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    datasets: [
        {
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

function HomeBottom() {
    const { loaded, error } = useAppSelector((state) => state.homeReducer);

    const heightStyle = { height: '100%' };

    return (
        <Grid container spacing={2} sx={{ flex: '0 0 200px' }}>
            <Grid item xs={4}>
                <Paper className="container" sx={heightStyle}>
                    <PlanWidget />
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className="container" sx={heightStyle}>
                    {loaded && !error && <Doughnut data={data} />}
                    <ErrBanner error={error} />
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className="container" sx={heightStyle}>
                    <DonateWidget />
                </Paper>
            </Grid>
        </Grid>
    );
}

export default HomeBottom;
