import React, { useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Box } from '@mui/material';
import { useAppDispatch } from '../../hooks/redux';
import { initAction } from '../state/home.actions';
import HomePros from '../components/home.pros.component';
import HomeMain from '../components/home.main.component';
import HomeBottom from '../components/HomeBottom';
import styles from '../styles/Home.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

function Home() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(initAction());
    }, [dispatch]);

    return (
        <Box className={styles.home__wrapper}>
            <HomePros />
            <HomeMain />
            <HomeBottom />
        </Box>
    );
}

export default Home;
