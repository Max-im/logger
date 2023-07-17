import React, { FC, useState } from 'react';
import {
    ListItem, Box, Typography, Chip, Button, Modal,
} from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { IPlan } from '../model/plan.model';
import styles from '../styles/PlanItem.module.scss';
import api from '../../services/http';
import { GET_PAYMENT_URL } from '../../constants';

interface IPlanItemProps {
    plan: IPlan;
    activePlanId: number;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    textAlign: 'center',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const PlanItem: FC<IPlanItemProps> = ({ plan, activePlanId }) => {
    const [open, setOpen] = useState(false);
    const [payForm, setPayForm] = useState<any>(null);
    const isActive = plan.id === activePlanId;
    const bgcolor = isActive ? 'info.main' : '';
    const planWrapperStyles = {
        bgcolor,
        border: '3px solid',
        borderColor: 'info.dark',
    };

    const onOpenCharge = async () => {
        const result = await api.get(`${GET_PAYMENT_URL}/${plan.id}`);
        setOpen(true);
        setPayForm(result.data);
    };

    const handleClose = () => {
        setOpen(false);
        setPayForm(null);
    };

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
                        {isActive
                            ? <Button variant="outlined" disabled>Current Plan</Button>
                            : <Button variant="contained" onClick={onOpenCharge}>Activate Now</Button>}
                    </Box>
                </Box>
            </ListItem>

            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <Typography variant="h4" pb={2}>Pay a Month</Typography>
                    <Chip
                        className={styles.plan__label}
                        component="p"
                        color="secondary"
                        variant="outlined"
                        label={plan.name}
                    />
                    <Typography className={styles.plan__block}>plan</Typography>
                    <Typography pb={4} className={styles.plan__block}>
                        for
                        <AttachMoneyIcon />
                        {plan.cost}
                    </Typography>
                    <Box dangerouslySetInnerHTML={{ __html: payForm }} />
                    <Typography variant="body2" pt={2}>Powered by LiqPay</Typography>
                </Box>
            </Modal>
        </>
    );
};

export default PlanItem;
