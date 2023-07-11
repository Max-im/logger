import React, { FC } from 'react';
import {
    ListItem, Box, Typography, Chip, Button,
} from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { IPlan } from '../model/plan.model';
import styles from '../styles/PlanItem.module.scss';

interface IPlanItemProps {
    plan: IPlan;
    activePlanId: number;
}

const PlanItem: FC<IPlanItemProps> = ({ plan, activePlanId }) => {
    const isActive = plan.id === activePlanId;
    const bgcolor = isActive ? 'info.main' : '';
    const planWrapperStyles = {
        bgcolor,
        border: '3px solid',
        borderColor: 'info.dark',
    };

    return (
        <ListItem className={styles.plan__item}>
            <Box
                color="primary"
                className={styles.plan__inner}
                sx={planWrapperStyles}
                component="span"
            >
                <Chip
                    className={styles.plan__label}
                    component="p"
                    color="secondary"
                    variant="outlined"
                    label={plan.name}
                />
                <Typography className={styles.plan__block}>
                    <AttachMoneyIcon />
                    {plan.cost}
                </Typography>
                <Typography component="span">Month fee</Typography>

                <Typography className={styles.plan__block}>{plan.projectsNum}</Typography>
                <Typography component="span">Projects available</Typography>

                <Box>
                    <Typography className={styles.plan__block}>{plan.storingDays}</Typography>
                    <Typography component="span">Logs store days</Typography>
                </Box>

                <Box className={styles.plan__block}>
                    {isActive
                        ? <Button variant="outlined" disabled>Current Plan</Button>
                        : <Button variant="contained">Activate Now</Button>}
                </Box>
            </Box>
        </ListItem>
    );
};

export default PlanItem;
