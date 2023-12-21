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
    textInput: {
      marginBottom: 20,
      borderWidth: 1,
      borderColor: theme.colors.grey,
      borderRadius: 4,
    },
    buttonContainer: {
      alignItems: 'center',
    },
    goToRegisterButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    goToRegisterButtonText: {
      marginLeft: 5,
      fontWeight: 'bold',
      color: theme.colors.blue,
    },
    showPasswordButton: {
      position: 'absolute',
      right: 10,
      top: 15,
    },
  });
