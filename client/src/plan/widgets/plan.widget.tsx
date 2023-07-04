import React from 'react';
import { Link } from 'react-router-dom';
import {
    Avatar, List, ListItem, ListItemText, Typography, ListItemIcon,
} from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { planRoute } from '../../routes';
import { useAppSelector } from '../../hooks/redux';

const PlanWidget = () => {
    const { plans } = useAppSelector((state) => state.planReducer);

    return (
        <>
            <Typography
                variant="h3"
                sx={{ fontSize: 18, fontWeight: 'bold' }}
                color="secondary"
            >
                Check out Plans
            </Typography>

            {Boolean(plans.length)
            && (
                <Link to={planRoute.url} style={{ textDecoration: 'none' }}>
                    <List sx={{ width: '100%' }}>
                        {plans.map((plan) => (
                            <ListItem sx={{ p: 0, m: 0 }} key={plan.id}>
                                <ListItemIcon key={plan.id}>
                                    <Avatar sx={{ width: 30, height: 30, bgcolor: 'primary.main' }}>
                                        <AttachMoneyIcon sx={{ fontSize: 11 }} />
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                fontSize: 16, fontWeight: 'bold', position: 'relative', left: -3,
                                            }}
                                        >
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
