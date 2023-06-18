import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip as ChartTooltip, Legend } from 'chart.js';
import { Box } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { getLogsInfoAction } from './log.actions';
import { ILevels } from './log.model';

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
    const { projectId } = useParams();
    const dispatch = useAppDispatch();
    const { info } = useAppSelector(state => state.logReducer);

    const logMap: {[key in ILevels]: number} = {
        FATAL: 0,
        ERROR: 1,
        WARN: 2,
        DEBUG: 3,
        INFO: 4,
    }

    const onError = (msg: string) => {
        console.log(msg)
    }

    useEffect(() => {
        dispatch(getLogsInfoAction(projectId!, onError));
    }, []);

    useEffect(() => {
        for(const level in info) {
            // @ts-ignore
            data.datasets[0].data[logMap[level]] = info[level];
        }
    }, [info]);

    return (
        <Box sx={{width: '100%'}}>
            {Boolean(Object.keys(info).length) && <Doughnut data={data} />}
        </Box>
    )
}

export default LogStructure;
