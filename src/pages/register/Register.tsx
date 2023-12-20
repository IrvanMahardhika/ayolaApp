import React, {useReducer, useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  InputModeOptions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import useThemedStyles from '@src/hooks/useThemedStyles';

import Header from '@components/header/Header';
import Button from '@components/button/Button';

import {Routes} from '@constants/Routes';

import {PasswordValidation} from '@src/types/auth';

import {validatePassword} from '@utils/general';

import RegisterStyles from './Register.styles';

type RegisterPageNavigationProps = {
  navigate: any;
  addListener: any;
};

type RegisterPageProps = {
  navigation: RegisterPageNavigationProps;
};

enum ActionType {
  SET_PHONENUMBER = 'SET_PHONENUMBER',
  SET_FIRSTNAME = 'SET_FIRSTNAME',
  SET_LASTNAME = 'SET_LASTNAME',
  SET_EMAIL = 'SET_EMAIL',
  SET_PASSWORD = 'SET_PASSWORD',
  SET_RESET = 'SET_RESET',
}

type AuthState = {
  phoneNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const INITIAL_STATE: AuthState = {
  phoneNumber: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const REDUCER = (state: AuthState, action: {type: string; payload: string}) => {
  switch (action.type) {
    case ActionType.SET_PHONENUMBER:
      return {...state, phoneNumber: action.payload};
    case ActionType.SET_FIRSTNAME:
      return {...state, firstName: action.payload};
    case ActionType.SET_LASTNAME:
      return {...state, lastName: action.payload};
    case ActionType.SET_EMAIL:
      return {...state, email: action.payload};
    case ActionType.SET_PASSWORD:
      return {...state, password: action.payload};
    case ActionType.SET_RESET:
      return INITIAL_STATE;
    default:
      return INITIAL_STATE;
  }
};

type InputFields = {
  label: string;
  placeholder: string;
  inputMode: InputModeOptions;
  secureTextEntry: boolean;
  value: string;
  onChangeText: (text: string) => void;
};

const Register: React.FC<RegisterPageProps> = ({navigation}) => {
  const styles = useThemedStyles(RegisterStyles);

  const [passwordValidation, setPasswordValidation] =
    useState<PasswordValidation>({status: '', error: false});
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [state, dispatch] = useReducer(REDUCER, INITIAL_STATE);

  const isSubmitButtonDisabled =
    !state.email || !state.firstName || !state.lastName || !state.password;

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch({type: ActionType.SET_RESET, payload: ''});
    });

    return unsubscribe;
  }, [navigation]);

  const handleSubmit = () => {
    console.log('state -- ', state);
    navigation.navigate(Routes.OTP, {phoneNumber: state.phoneNumber});
  };

  const goToLoginPage = () => navigation.navigate(Routes.LOGIN);

  const handleValidatePassword = (inputPassword: string) => {
    const res = validatePassword(inputPassword);
    setPasswordValidation(res);
  };

  const inputFields: Array<InputFields> = [
    {
      label: 'Phone number',
      placeholder: '62812103994457',
      inputMode: 'tel',
      secureTextEntry: false,
      value: state.phoneNumber,
      onChangeText: (text: string) =>
        dispatch({type: ActionType.SET_PHONENUMBER, payload: text}),
    },
    {
      label: 'First name',
      placeholder: 'John',
      inputMode: 'text',
      secureTextEntry: false,
      value: state.firstName,
      onChangeText: (text: string) =>
        dispatch({type: ActionType.SET_FIRSTNAME, payload: text}),
    },
    {
      label: 'Last name',
      placeholder: 'Boyega',
      inputMode: 'text',
      secureTextEntry: false,
      value: state.lastName,
      onChangeText: (text: string) =>
        dispatch({type: ActionType.SET_LASTNAME, payload: text}),
    },
    {
      label: 'Email',
      placeholder: 'j_boyega@disney.or',
      inputMode: 'email',
      secureTextEntry: false,
      value: state.email,
      onChangeText: (text: string) =>
        dispatch({type: ActionType.SET_EMAIL, payload: text}),
    },
    {
      label: 'Password',
      placeholder: '',
      inputMode: 'text',
      secureTextEntry: !showPassword,
      value: state.password,
      onChangeText: (text: string) => {
        dispatch({type: ActionType.SET_PASSWORD, payload: text});
        handleValidatePassword(text);
      },
    },
  ];

  const _renderInputFields = () => {
    return inputFields.map((inputField, index) => {
      const isPasswordInput = inputField.label === 'Password';
      const isPasswordInputError = isPasswordInput && passwordValidation.error;

      return (
        <View key={index.toString()}>
          <Text style={styles.inputLabelText}>{inputField.label}</Text>
          <TextInput
            placeholder={inputField.placeholder}
            inputMode={inputField.inputMode}
            secureTextEntry={inputField.secureTextEntry}
            style={[
              styles.textInput,
              isPasswordInputError && styles.textInputError,
            ]}
            value={inputField.value}
            onChangeText={inputField.onChangeText}
          />
          {isPasswordInputError && (
            <Text style={styles.errorText}>{passwordValidation.status}</Text>
          )}
          {isPasswordInput && (
            <TouchableOpacity
              style={styles.showPasswordButton}
              onPress={() => setShowPassword(!showPassword)}>
              <Text>show</Text>
            </TouchableOpacity>
          )}
        </View>
      );
    });
  };

  return (
    <View style={styles.root}>
      <Header title="Sign Up" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.body}>
          {_renderInputFields()}
          <View style={styles.buttonContainer}>
            <Button
              text="Submit"
              disabled={isSubmitButtonDisabled}
              onPress={handleSubmit}
            />
          </View>
          <View style={styles.goToLoginButtonContainer}>
            <Text>Already have account ?</Text>
            <TouchableOpacity onPress={goToLoginPage}>
              <Text style={styles.goToLoginButtonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Register;
