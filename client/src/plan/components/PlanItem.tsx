import React, { FC, useState } from 'react';
import { ListItem, Box, Typography, Button, Chip } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { IPlan } from '../model/plan.model';
import styles from '../styles/PlanItem.module.scss';
import { PaymentWidget } from '../../payment';

interface IPlanItemProps {
    plan: IPlan;
    activePlanId: number;
    authorized: boolean;
}

const PlanItem: FC<IPlanItemProps> = ({ plan, activePlanId, authorized }) => {
    const [open, setOpen] = useState(false);
    const isActive = plan.id === activePlanId;
    const bgcolor = isActive ? 'info.main' : '';
    const planWrapperStyles = {
        bgcolor,
        border: '3px solid',
        borderColor: 'info.dark',
    };

    const onOpenCharge = async () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const showAuthModal = () => {
        console.log('Please login first');
    };

    let button = <Button variant="outlined" disabled>Current Plan</Button>;
    if (!isActive && authorized) {
        button = <Button variant="contained" onClick={onOpenCharge}>Activate Now</Button>;
    } else if (!isActive && !authorized) {
        button = <Button variant="contained" onClick={showAuthModal}>Activate Now</Button>;
    }

    return (
        <>
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
                        { button }
                    </Box>
                </Box>
            </ListItem>

            {open && <PaymentWidget open={open} handleClose={handleClose} plan={plan} />}
        </>
    );
};

export default PlanItem;
