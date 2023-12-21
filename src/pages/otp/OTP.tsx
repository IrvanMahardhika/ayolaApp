import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  Alert,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Platform,
} from 'react-native';

import useThemedStyles from '@src/hooks/useThemedStyles';
import useCountdown from '@src/hooks/useCountDown';

import {getOTPCountdownNumber} from '@utils/general';

import {Routes} from '@constants/Routes';

import OTPStyles from './OTP.styles';

type OTPPageNavigationProps = {
  pop: any;
  navigate: any;
};

type OTPPageProps = {
  navigation: OTPPageNavigationProps;
  route: {
    params: {
      phoneNumber: string;
    };
  };
};

const OTP_LENGTH = 6;
const OTP_COUNTDOWN_START_FROM = 30;
const ACCEPTED_OTP_VALUE = '111111';

const OTP = ({navigation, route}: OTPPageProps) => {
  const styles = useThemedStyles(OTPStyles);

  const phoneNumber = route.params.phoneNumber;
  const isIos = Platform.OS === 'ios';

  const [mm, ss, restartCountdown] = useCountdown(OTP_COUNTDOWN_START_FROM);
  const isCountdownFinished = mm + ss <= 0;

  const [otpValue, setOtpValue] = useState<string>('');
  const [otpError, setOtpError] = useState<string>('');

  const inputRef = useRef<TextInput>();

  useEffect(() => {
    if (inputRef?.current) {
      (inputRef?.current as any)?.focus();
    }
  }, []);

  useEffect(() => {
    const isOtpInputCompleted = otpValue.length === 6;
    if (!isOtpInputCompleted) {
      return;
    }
    if (otpValue === ACCEPTED_OTP_VALUE) {
      Alert.alert('Success', 'OTP match, please login', [
        {
          text: 'OK',
          onPress: () => {
            setOtpValue('');
            navigation.pop();
            navigation.navigate(Routes.LOGIN);
          },
        },
      ]);
    } else {
      setOtpError('error');
    }
  }, [navigation, otpValue]);

  const handleOnChangeOtp = (code: string) => {
    setOtpError('');
    setOtpValue(code);
  };

  const _renderOtpCircle = () => {
    return new Array(OTP_LENGTH).fill(0).map((_, index) => {
      const digit = otpValue[index] || '';
      const isFocused = index === otpValue.length;

      return (
        <View
          key={index}
          style={[
            styles.OTPCircle,
            index > 0 && styles.OTPCircleGap,
            isFocused ? styles.OTPCircleFocused : {},
            otpError !== '' ? styles.OTPCircleError : {},
          ]}>
          <Text
            style={[
              styles.OTPCircleText,
              otpError !== '' ? styles.OTPErrorText : {},
            ]}>
            {digit}
          </Text>
        </View>
      );
    });
  };

  const _renderCountDownText = useCallback(
    (minutes: number, seconds: number) => (
      <Text style={styles.countdownText}>
        {`[${getOTPCountdownNumber(minutes, '0', 2)}:${getOTPCountdownNumber(
          seconds,
          '0',
          2,
        )}]`}
      </Text>
    ),
    [styles.countdownText],
  );

  return (
    <View style={styles.root}>
      <Text
        testID="main-text"
        style={[styles.mainText, isIos && styles.mainTextMarginTopIos]}>
        Enter Authentication Code
      </Text>
      <Text
        style={
          styles.infoText
        }>{`Enter the 6 digit that we have sent via the phone number to ${phoneNumber}`}</Text>
      <View style={styles.otpInputContainer}>
        <TouchableOpacity
          style={styles.splitOtpCircleContainer}
          onPress={() => (inputRef?.current as any).focus()}>
          {_renderOtpCircle()}
        </TouchableOpacity>
        <TextInput
          style={styles.textInputHidden}
          value={otpValue}
          onChangeText={text => handleOnChangeOtp(text.replace(/\D/g, ''))}
          maxLength={OTP_LENGTH}
          ref={inputRef as React.LegacyRef<TextInput>}
          onBlur={() => Keyboard.dismiss()}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.countdownTextContainer}>
        {_renderCountDownText(mm, ss)}
      </View>
      <TouchableOpacity
        disabled={!isCountdownFinished}
        onPress={() => restartCountdown()}>
        <Text
          style={[
            styles.resendButtonText,
            isCountdownFinished && styles.resendButtonTextEnabled,
          ]}>
          Resend Code
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OTP;
