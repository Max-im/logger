import { createTheme } from '@mui/material/styles';
import { deepOrange, lightBlue } from '@mui/material/colors';

const fontFamily = ['Source Sans Pro', 'Roboto', 'sans-serif'].join(',');

export const lightTheme = createTheme({
    breakpoints: {
        values: {
            xs: 300,
            sm: 678,
            md: 920,
            lg: 1024,
            xl: 1200,
        },
    },
    palette: {
        mode: 'light',
        background: {
            default: '#ededed',
            paper: '#fefefe',
        },
        text: {
            primary: '#272727',
        },
        primary: {
            main: '#4ECDAC',
            light: '#13babd',
            dark: '#0d8587',
            contrastText: '#272727',
        },
        secondary: lightBlue,
        error: deepOrange,
    },
    typography: {
        fontFamily,
        fontSize: 12,
        h1: { fontSize: '2.2rem', fontFamily }, // title
        h3: { fontSize: '0.8rem', fontFamily },
        body1: { fontFamily, letterSpacing: 0.8, fontSize: '12px' }, // subtitle
        body2: { fontFamily, letterSpacing: 0.9 },
        subtitle1: { letterSpacing: 1.3, fontFamily, fontSize: '1.2rem' },
    },
    // components: {
    //     MuiTableCell: {
    //         styleOverrides: {
    //             root: {
    //                 padding: '0px',
    //             },
    //         },
    //     },
    // },
});
