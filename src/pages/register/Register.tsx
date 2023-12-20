import React, {useReducer, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  InputModeOptions,
  TouchableOpacity,
} from 'react-native';

import useThemedStyles from '@src/hooks/useThemedStyles';

import Header from '@components/header/Header';
import Button from '@components/button/Button';

import {Routes} from '@constants/Routes';

import RegisterStyles from './Register.styles';

type RegisterPageNavigationProps = {
  navigate: any;
  addListener: any;
};

type RegisterPageProps = {
  navigation: RegisterPageNavigationProps;
};

enum ActionType {
  SET_FIRSTNAME = 'SET_FIRSTNAME',
  SET_LASTNAME = 'SET_LASTNAME',
  SET_EMAIL = 'SET_EMAIL',
  SET_PASSWORD = 'SET_PASSWORD',
  SET_RESET = 'SET_RESET',
}

type AuthState = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const INITIAL_STATE: AuthState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const REDUCER = (state: AuthState, action: {type: string; payload: string}) => {
  switch (action.type) {
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
    navigation.navigate(Routes.OTP);
  };

  const goToLoginPage = () => navigation.navigate(Routes.LOGIN);

  const inputFields: Array<InputFields> = [
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
      secureTextEntry: true,
      value: state.password,
      onChangeText: (text: string) =>
        dispatch({type: ActionType.SET_PASSWORD, payload: text}),
    },
  ];

  const _renderInputFields = () => {
    return inputFields.map((inputField, index) => {
      return (
        <View key={index.toString()}>
          <Text style={styles.inputLabelText}>{inputField.label}</Text>
          <TextInput
            placeholder={inputField.placeholder}
            inputMode={inputField.inputMode}
            secureTextEntry={inputField.secureTextEntry}
            style={styles.textInput}
            value={inputField.value}
            onChangeText={inputField.onChangeText}
          />
        </View>
      );
    });
  };

  return (
    <View style={styles.root}>
      <Header title="Sign Up" />
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
    </View>
  );
};

export default Register;
