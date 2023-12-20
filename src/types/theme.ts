import {ColorValue} from 'react-native';

export type Theme = {
  colors: Record<string, ColorValue>;
  typography: Record<string, any>;
};
