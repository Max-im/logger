import React from 'react';
import { Button, Box } from '@mui/material';
import Icon from '../assets/coffee.svg';
import styles from '../styles/Donate.module.scss';
import DonateTitle from './DonateTitle';

const DonateCoffee = () => (
    <Box className={styles.tile}>
        <DonateTitle title="Buy Me a Coffee" />

        <Box className={styles.icon}>
            <img
                className={styles.icon__el}
                src={Icon}
                alt="Icon"
            />
        </Box>
        <a
            href="https://www.buymeacoffee.com/pogidaevmo8"
            target="_blank"
            rel="noreferrer"
        >
            <Button variant="outlined" className={styles.btn}>
                Buy me a coffee
            </Button>
        </a>
    </Box>
);

export default DonateCoffee;
