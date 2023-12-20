import {Theme} from '@src/types/theme';

const defaultTheme: Theme = {
  colors: {
    white: 'rgb(255, 255, 255)',
    black: 'rgb(0, 0, 0)',
    grey: 'rgb(173, 173, 173)',
    blue: 'rgb(88, 132, 233)',
    red: 'rgb(235, 64, 52)',
    green: 'rgb(0, 159, 59)',
  },
  typography: {},
};

export default {
  default: defaultTheme,
};
