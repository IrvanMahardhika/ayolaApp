import {StyleSheet} from 'react-native';

import {Theme} from '@src/types/theme';

export default (theme: Theme) =>
  StyleSheet.create({
    header: {
      paddingVertical: 24,
      alignItems: 'center',
      backgroundColor: theme.colors.red,
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.colors.white,
    },
  });
