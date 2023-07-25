import React, { FC } from 'react';
import { Button, Box } from '@mui/material';
import Icon from '../assets/card.svg';
import DonateTitle from './DonateTitle';
import styles from '../styles/Donate.module.scss';

const DonateCard: FC<{amount: number}> = ({ amount }) => (
    <Box className={styles.tile}>
        <DonateTitle title={`Support us with $${amount}`} />

        <Box className={styles.icon}>
            <img
                className={styles.icon__el}
                src={Icon}
                alt="Icon"
            />
        </Box>

        <Button variant="outlined" className={styles.btn}>
            Support
        </Button>
    </Box>
);

export default DonateCard;
