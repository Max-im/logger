import React, { FC } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import DonatePatreon from '../components/DonatePatreon';
import styles from '../styles/Donate.module.scss';
import DonateCard from '../components/DonateCard';
import DonateCoffee from '../components/DonateCoffee';

const Donate: FC = () => (
    <Paper className={`container ${styles.container}`}>
        <Typography mb={2} variant="h5">Select Convinient variant</Typography>
        <Box className={styles.list}>
            <DonatePatreon />
            <DonateCoffee />
            <DonateCard />
        </Box>
    </Paper>
);

export default Donate;
