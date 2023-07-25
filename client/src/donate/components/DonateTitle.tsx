import React, { FC } from 'react';
import { Typography } from '@mui/material';
import styles from '../styles/Donate.module.scss';

const DonateTitle: FC<{title: string}> = ({ title }) => (
    <Typography
        variant="h3"
        className={styles.title}
        color="secondary"
    >
        {title}
    </Typography>
);

export default DonateTitle;
