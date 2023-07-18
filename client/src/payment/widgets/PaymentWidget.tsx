import React, { FC, useState, useEffect } from 'react';
import { Box, Typography, Chip, Modal } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { IPlan } from '../../plan/model/plan.model';
import { GET_PAYMENT_URL } from '../../constants';
import api from '../../services/http';
import styles from '../styles/PaymentWidget.module.scss';

interface IPaymentModalProps {
  open: boolean;
  handleClose: () => void;
  plan: IPlan
}

interface IPayParams {
    data: string;
    signature: string;
}

const PaymentWidget: FC<IPaymentModalProps> = ({ open, handleClose, plan }) => {
    const [payForm, setPayForm] = useState<IPayParams | null>(null);

    useEffect(() => {
        api.get(`${GET_PAYMENT_URL}/${plan.id}`)
            .then(({ data }) => setPayForm(data));

        return () => {
            setPayForm(null);
        };
    }, [plan.id]);

    return (
        <Modal open={open} onClose={handleClose}>
            <Box className={styles.payment__container} sx={{ bgcolor: 'background.paper' }}>
                {payForm && (
                    <>
                        <Typography variant="h4" pb={4}>Buy Plan</Typography>
                        <Chip
                            component="p"
                            color="secondary"
                            variant="outlined"
                            label={plan.name}
                        />
                        <Typography variant="body2" pt={4} pb={1} className={styles.payment__text}>for</Typography>
                        <Typography variant="body2" pb={1} className={styles.payment__price}>
                            <AttachMoneyIcon />
                            {plan.cost}
                        </Typography>
                        <Typography variant="body2" pb={4} className={styles.payment__text}>in a month</Typography>
                        <form method="POST" action="https://www.liqpay.ua/api/3/checkout" acceptCharset="utf-8">
                            <input type="hidden" name="data" value={payForm!.data} />
                            <input type="hidden" name="signature" value={payForm!.signature} />
                            <input
                                className={styles.payment__button}
                                type="image"
                                src="//static.liqpay.ua/buttons/p1en.radius.png"
                                alt="img"
                                name="btn_text"
                            />
                        </form>
                    </>
                )}
            </Box>
        </Modal>
    );
};

export default PaymentWidget;
