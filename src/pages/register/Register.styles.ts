import {StyleSheet} from 'react-native';

import {Theme} from '@src/types/theme';

export default (theme: Theme) =>
  StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: theme.colors.white,
    },
    body: {
      paddingVertical: 10,
      paddingHorizontal: 24,
    },
    inputLabelText: {
      marginBottom: 5,
      color: theme.colors.black,
    },
    textInput: {
      marginBottom: 20,
      borderWidth: 1,
      borderColor: theme.colors.grey,
      borderRadius: 4,
    },
    buttonContainer: {
      alignItems: 'center',
    },
    button: {
      width: 200,
      height: 40,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.red,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.colors.white,
    },
    goToLoginButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    goToLoginButtonText: {
      marginLeft: 5,
      fontWeight: 'bold',
      color: theme.colors.blue,
    },
  });
