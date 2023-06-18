import React, { useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip as ChartTooltip, Legend } from 'chart.js';
import { Box } from '@mui/material';
import { useAppSelector } from '../hooks/redux';

ChartJS.register(ArcElement, ChartTooltip, Legend);

const data = {
    labels: ['Fatal', 'Error', 'Warning', 'Debug', 'Info'],
    datasets: [
      {
        // label: '# of Votes',
        data: [0, 0, 0, 0, 0],
        backgroundColor: [
            'rgba(255, 18, 0, 0.6)',
            'rgba(235, 64, 52, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(76, 132, 230, 0.6)',
        ],
        borderColor: [
            'rgb(255, 18, 0)',
            'rgb(235, 64, 52)',
            'rgb(255, 206, 86)',
            'rgb(75, 192, 192)',
            'rgb(76, 132, 230)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
const LogStructure = () => {
    const { logs } = useAppSelector(state => state.logReducer);

    const logMap = {
        FATAL: 0,
        ERROR: 1,
        WARN: 2,
        DEBUG: 3,
        INFO: 4,
    }

    useEffect(() => {
        for (const id in logs) {
            const log = logs[id];
            data.datasets[0].data[logMap[log.level]]++;
        }
    }, [logs]);

    return (
        <Box sx={{width: '100%'}}>
            {Boolean(Object.keys(logs).length) && <Doughnut data={data} />}
        </Box>
    )
}

export default LogStructure;
