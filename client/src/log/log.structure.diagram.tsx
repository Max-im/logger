import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip as ChartTooltip, Legend } from 'chart.js';
import { Box } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { getLogsInfoAction } from './log.actions';
import { ILevels, LevelColors } from './log.model';

ChartJS.register(ArcElement, ChartTooltip, Legend);
 
const LogStructure = () => {
    const [levels, setLevels] = useState([0,0,0,0,0])
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
        const updatedLevels = [...levels];
        for(const level in info) {
            // @ts-ignore
            updatedLevels[logMap[level]] = info[level];
        }
        setLevels(updatedLevels);
    }, [info]);

    const data = {
        // labels: ['Fatal', 'Error', 'Warning', 'Debug', 'Info'],
        datasets: [
          {
            // label: '# of Votes',
            data: levels,
            backgroundColor: [
                LevelColors.FATAL.bg,
                LevelColors.ERROR.bg,
                LevelColors.WARN.bg,
                LevelColors.DEBUG.bg,
                LevelColors.INFO.bg,
            ],
            borderColor: [
                LevelColors.FATAL.color,
                LevelColors.ERROR.color,
                LevelColors.WARN.color,
                LevelColors.DEBUG.color,
                LevelColors.INFO.color,
            ],
            borderWidth: 1,
          },
        ],
    };

    return (
        <Box sx={{width: '100%'}}>
            {Boolean(Object.keys(info).length) && <Doughnut data={data} />}
        </Box>
    )
}

export default LogStructure;
