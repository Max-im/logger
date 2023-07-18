import React, { FC, useState, useEffect } from 'react';
import { Box, Typography, Chip, Modal } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { IPlan } from '../../plan/model/plan.model';
import { GET_PAYMENT_URL } from '../../constants';
import api from '../../services/http';

interface IPaymentModalProps {
  open: boolean;
  handleClose: () => void;
  plan: IPlan
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
            <Box sx={style}>
                {payForm && (
                    <>
                        <Typography variant="h4" pb={2}>Pay a Month</Typography>
                        <Chip
                            component="p"
                            color="secondary"
                            variant="outlined"
                            label={plan.name}
                        />
                        <Typography>plan</Typography>
                        <Typography pb={4}>
                            for
                            <AttachMoneyIcon />
                            {plan.cost}
                        </Typography>
                        <form method="POST" action="https://www.liqpay.ua/api/3/checkout" acceptCharset="utf-8">
                            <input type="hidden" name="data" value={payForm!.data} />
                            <input type="hidden" name="signature" value={payForm!.signature} />
                            <input
                                type="image"
                                src="//static.liqpay.ua/buttons/p1en.radius.png"
                                alt="img"
                                name="btn_text"
                            />
                        </form>
                        <Typography variant="body2" pt={2}>Powered by LiqPay</Typography>
                    </>
                )}
            </Box>
        </Modal>
    );
};

export default PaymentWidget;
