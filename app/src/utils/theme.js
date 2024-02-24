import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const theme = darkTheme;

theme.typography.h5 = {
  fontWeight: 'normal', // Removing bold styling
  fontSize: '1rem', // Equivalent to 16px with a base font size of 16px
  '@media (min-width:600px)': {
    fontSize: '1.2rem', // Equivalent to 19.2px with a base font size of 16px
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem', // Equivalent to 24px with a base font size of 16px
  },
};



export default theme;