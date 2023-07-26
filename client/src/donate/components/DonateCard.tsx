import React, { FC } from 'react';
import { Button, Box, FormControl, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { onGetDonateParamsAction } from '../store/donate.actions';
import Icon from '../assets/card.svg';
import DonateTitle from './DonateTitle';
import styles from '../styles/Donate.module.scss';
import { IDonate } from '../model/donate.model';
import ErrBanner from '../../shared/ui/ErrBanner';

const DonateCard: FC = () => {
    const [amount, setAmount] = React.useState<string>('');
    const [error, setError] = React.useState<string | null>(null);
    const [donateData, setDonateData] = React.useState<IDonate>({ data: '', signature: '' });

    const handleChange = async (e: SelectChangeEvent) => {
        const value = e.target.value as string;
        try {
            const donateParams = await onGetDonateParamsAction(value);
            setAmount(value);
            setDonateData(donateParams);
        } catch (err) {
            setError(err as string);
        }
    };

    const btnParams = amount ? {} : { disabled: true };

    return (
        <Box className={styles.tile}>
            <DonateTitle title="Support us by card" />

            <Box className={styles.icon}>
                <img
                    className={styles.icon__el}
                    src={Icon}
                    alt="Icon"
                />
            </Box>

            <form method="POST" action="https://www.liqpay.ua/api/3/checkout" acceptCharset="utf-8">
                <FormControl fullWidth>
                    <InputLabel size="small" id="amount">Amount $</InputLabel>
                    <Select
                        size="small"
                        labelId="amount"
                        value={amount}
                        label="Amount"
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>$ 1.00</MenuItem>
                        <MenuItem value={3}>$ 3.00</MenuItem>
                        <MenuItem value={5}>$ 5.00</MenuItem>
                        <MenuItem value={10}>$ 10.00</MenuItem>
                        <MenuItem value={15}>$ 15.00</MenuItem>
                    </Select>
                </FormControl>

                <input type="hidden" name="data" value={donateData.data} />
                <input type="hidden" name="signature" value={donateData.signature} />

                <ErrBanner error={error} />
                <Button variant="outlined" {...btnParams} type="submit" className={styles.btn}>
                    Support
                </Button>
            </form>
        </Box>
    );
};

export default DonateCard;
