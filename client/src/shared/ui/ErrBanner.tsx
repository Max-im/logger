import React, { FC } from 'react';
import { Box, Alert } from '@mui/material';

const ErrBanner: FC<{ error: string | null}> = ({ error }) => {
    return (
        <Box>
            {
                Boolean(error) && (
                    <Box mt={2} mb={2}>
                        <Alert severity="error">{error}</Alert>
                    </Box>
                )
            }
        </Box>
    );
};

export default ErrBanner;
