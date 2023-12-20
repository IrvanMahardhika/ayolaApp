import {StyleSheet} from 'react-native';

import {Theme} from '@src/types/theme';

export default (theme: Theme) =>
  StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: theme.colors.white,
    },
    body: {
      paddingTop: 50,
      paddingBottom: 10,
      paddingHorizontal: 24,
    },
    welcomeTextContainer: {
      alignItems: 'center',
      marginBottom: 50,
    },
    welcomeText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.colors.black,
    },
    buttonContainer: {
      alignItems: 'center',
    },
  });
