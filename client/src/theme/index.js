import { createTheme } from '@mui/material/styles';
import variables from '../styles/global.scss';

const theme = createTheme({
  palette: {
    primary: {
      main: variables.primary,
      dark: variables.primary_dark,
    },
    white: {
      main: variables.white,
    },
    green: {
      light: variables.primary_dark,
      main: variables.green,
      dark: variables.primary_dark,
    },
    yellow: {
      main: variables.yellow,
    },
    peach: {
      main: variables.peach,
    },
    grey: {
      main: variables.grey,
    },
    'dark-grey': {
      main: variables['dark-grey'],
    },
    'dark-blue': {
      main: variables['dark-blue'],
    },
    'dark-yellow': {
      main: variables['dark-yellow'],
    },
  },
});

export default theme;
