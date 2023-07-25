import React from 'react';
import { Button, Box } from '@mui/material';
import Icon from '../assets/patreon-svgrepo-com.svg';
import styles from '../styles/Donate.module.scss';
import DonateTitle from './DonateTitle';

const DonatePatreon = () => (
    <Box className={styles.tile}>
        <DonateTitle title="Support us on Patreon" />

        <Box className={styles.icon}>
            <img
                className={styles.icon__el}
                src={Icon}
                alt="Icon"
            />
        </Box>
        <a
            href="https://www.patreon.com/max_im"
            target="_blank"
            rel="noreferrer"
        >
            <Button variant="outlined" className={styles.btn}>
                Support
            </Button>
        </a>
    </Box>
);

export default DonatePatreon;
