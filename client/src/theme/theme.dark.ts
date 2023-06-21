import { createTheme } from '@mui/material/styles';
import { deepOrange, lightBlue, blueGrey } from '@mui/material/colors';

const fontFamily = ['Source Sans Pro', 'Roboto', 'sans-serif'].join(',');

export const darkTheme = createTheme({
  breakpoints: {
    values: {
      xs: 300,
      sm: 678,
      md: 920,
      lg: 1024,
      xl: 1200,
    }
  },
  palette: {
    mode: 'dark',
    background: {
      default: '#151A2D',
      paper: '#222A3F',
    },
    text: {
      primary: "#FFF"
    },
    primary: {
      main: '#4ECDAC',
      light: '#13babd',
      dark: '#0d8587',
      contrastText: '#fff'
    },
    secondary: lightBlue,
    info: {
      main: '#4e7283'
    },
    error: deepOrange
  },
  typography: {
    fontFamily,
    fontSize: 12,
    h1: { fontSize: "2.2rem", fontFamily }, // title
    h3: { fontSize: "0.8rem", fontFamily },
    body1: { fontFamily, letterSpacing: 0.8, fontSize: '12px' }, // subtitle
    body2: { fontFamily, letterSpacing: 0.9 },
    subtitle1: { letterSpacing: 1.3, fontFamily, fontSize: "1.2rem" }
  }
});



// export const theme = {
//   grey: {
//     100: '#e0e0e0',
//     200: '#c2c2c2',
//     300: '#a3a3a3',
//     400: '#858585',
//     500: '#666666',
//     600: '#525252',
//     700: '#3d3d3d',
//     800: '#292929',
//     900: '#141414',
//   },
//   primary: {
//     100: '#d0d1d5',
//     200: '#a1a4ab',
//     300: '#727681',
//     400: '#1F2A40',
//     500: '#141b2d',
//     600: '#101624',
//     700: '#0c101b',
//     800: '#080b12',
//     900: '#040509',
//   },
//   greenAccent: {
//     100: "#dbf5ee",
//     200: "#b7ebde",
//     300: "#94e2cd",
//     400: "#70d8bd",
//     500: "#4cceac",
//     600: "#3da58a",
//     700: "#2e7c67",
//     800: "#1e5245",
//     900: "#0f2922",
//   },
//   redAccent: {
//     100: "#f8dcdb",
//     200: "#f1b9b7",
//     300: "#e99592",
//     400: "#e2726e",
//     500: "#db4f4a",
//     600: "#af3f3b",
//     700: "#832f2c",
//     800: "#58201e",
//     900: "#2c100f",
//   },
//   blueAccent: {
//     100: "#e1e2fe",
//     200: "#c3c6fd",
//     300: "#a4a9fc",
//     400: "#868dfb",
//     500: "#6870fa",
//     600: "#535ac8",
//     700: "#3e4396",
//     800: "#2a2d64",
//     900: "#151632",
//   }
// }
