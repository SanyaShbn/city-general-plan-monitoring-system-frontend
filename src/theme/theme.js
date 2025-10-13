import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1e5fbf',
    },
    secondary: {
      main: '#00a676',
    },
    background: {
      default: '#f6f8fb',
    },
  },
  typography: {
    fontFamily: '"Inter","Roboto","Segoe UI",Arial,sans-serif',
  },
});

export default theme;
