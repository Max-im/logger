import React from 'react';
import { Typography, Button } from '@mui/material';

const DonateWidget = () => (
    <>
        <Typography
            variant="h3"
            sx={{ fontSize: 18, fontWeight: 'bold' }}
            color="secondary"
        >
            Like what we do? Support us!
        </Typography>

        <Typography mt={2} mb={3}>
            Your contribution helps us continue delivering quality services.
        </Typography>

        <a
            href="https://www.patreon.com/max_im"
            target="_blank"
            rel="noreferrer"
        >
            <Button variant="outlined" sx={{ width: '100%' }}>
                <span role="img" aria-label="folded hands">🙏</span>
                {' '}
                Donate
            </Button>
        </a>

        <Typography sx={{ mt: 2 }}>
            Join us on this amazing journey. Thank you!
        </Typography>
    </>
);

export default DonateWidget;
