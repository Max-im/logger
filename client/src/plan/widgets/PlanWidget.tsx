import React from 'react';
import { Link } from 'react-router-dom';
import {
    Avatar, List, ListItem, ListItemText, Typography, ListItemIcon,
} from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { planRoute } from '../../routes';
import { useAppSelector } from '../../hooks/redux';
import styles from '../styles/PlanWidget.module.scss';
import ErrBanner from '../../shared/ui/ErrBanner';

const PlanWidget = () => {
    const { plans, error } = useAppSelector((state) => state.planReducer);

    return (
        <>
            <Typography variant="h3" className={styles.title} color="secondary">Check out Plans</Typography>
            <ErrBanner error={error} />
            {Boolean(plans.length)
            && (
                <Link to={planRoute.url} className={styles.link}>
                    <List className={styles.list}>
                        {plans.map((plan) => (
                            <ListItem className={styles.item} key={plan.id}>
                                <ListItemIcon>
                                    <Avatar sx={{ bgcolor: 'primary.main' }} className={styles.icon__wrapper}>
                                        <AttachMoneyIcon className={styles.icon} />
                                        <Typography variant="h3" className={styles.text}>
                                            {plan.cost}
                                        </Typography>
                                    </Avatar>
                                </ListItemIcon>
                                <ListItemText
                                    primary={plan.name}
                                    secondary={`${plan.projectsNum} projects available`}
                                    sx={{ color: 'text.primary' }}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Link>
            )}
        </>
    );
};

export default PlanWidget;
