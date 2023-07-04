import React, { FC, ReactNode } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import { darkTheme } from './theme.dark';
import { lightTheme } from './theme.light';
import { useAppSelector } from '../hooks/redux';

interface ITheme {
    children: ReactNode
}

const Theme: FC<ITheme> = ({ children }) => {
    const { light } = useAppSelector((state) => state.themeReducer);

    const theme = light ? lightTheme : darkTheme;
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ bgcolor: 'background.default' }}>{children}</Box>
        </ThemeProvider>
    );
};

export default Theme;
