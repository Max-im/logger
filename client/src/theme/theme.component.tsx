import React, { ElementType } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { darkTheme } from './theme.dark';
import { lightTheme } from './theme.light';
import { useAppSelector } from '../hooks/redux';

const Theme: ElementType = ({ children }) => {
  const { light } = useAppSelector(state => state.themeReducer);

  const theme = light ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.default' }}>{children}</Box>
    </ThemeProvider>
  )
}

export default Theme;