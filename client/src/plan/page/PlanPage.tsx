import React from 'react';
import { Paper, List, Box, Typography } from '@mui/material';
import PlanItem from '../components/PlanItem';
import { useAppSelector } from '../../hooks/redux';
import styles from '../styles/PlanPage.module.scss';

const PlanPage = () => {
    const { plans, loaded } = useAppSelector((state) => state.planReducer);
    const { user, authorized } = useAppSelector((state) => state.userReducer);

    return (
        <Paper className={`container ${styles.plan__wrapper}`}>
            <Typography className={styles.plan__title} variant="subtitle2">
                Welcome to our Plans section!
            </Typography>
            <Typography className={styles.plan__description} variant="subtitle2">
                Choose from a range of options to tailor your service exactly the way you want it.
                We offer flexible plans designed to meet your unique needs.
                Select one of our plans today and take control of your experience.
            </Typography>
            <Box flexGrow={1} display="flex">
                <Box flexGrow={1} display="flex" flexDirection="column">
                    { loaded && (
                        <List className={styles.plan__list}>
                            {plans.map((plan) => (
                                <PlanItem
                                    key={plan.id}
                                    plan={plan}
                                    activePlanId={user.planId}
                                    authorized={authorized}
                                />
                            ))}
                        </List>
                    )}
                </Box>
            </Box>
        </Paper>
    );
};

export default PlanPage;
