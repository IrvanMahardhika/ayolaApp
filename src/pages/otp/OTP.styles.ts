import {StyleSheet} from 'react-native';

import {Theme} from '@src/types/theme';

export default (theme: Theme) =>
  StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: theme.colors.white,
      alignItems: 'center',
    },
    mainText: {
      width: 300,
      marginTop: 50,
      marginBottom: 10,
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.colors.black,
      textAlign: 'center',
    },
    mainTextMarginTopIos: {marginTop: 100},
    infoText: {
      width: 300,
      textAlign: 'center',
    },
    otpInputContainer: {
      marginTop: 30,
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    splitOtpCircleContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      width: '100%',
    },
    OTPCircleError: {
      borderColor: theme.colors.red,
    },
    OTPErrorText: {
      color: theme.colors.red,
    },
    OTPCircle: {
      borderColor: theme.colors.grey,
      borderWidth: 1,
      borderRadius: 25,
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    OTPCircleGap: {
      marginLeft: 5,
    },
    OTPCircleFocused: {borderColor: theme.colors.green, borderWidth: 2},
    OTPCircleText: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.colors.black,
    },
    textInputHidden: {
      position: 'absolute',
      opacity: 0,
      width: 0,
    },
    countdownTextContainer: {
      marginTop: 100,
    },
    resendButtonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: theme.colors.grey,
    },
    resendButtonTextEnabled: {
      color: theme.colors.black,
    },
  });
