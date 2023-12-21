import React, {useState, useEffect} from 'react';
import {
  Alert,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';

import useThemedStyles from '@src/hooks/useThemedStyles';

import Header from '@components/header/Header';
import Button from '@components/button/Button';

import {AsyncStorageKey} from '@constants/asyncStorageKeys';
import {Routes} from '@constants/Routes';

import {useAuthContext} from '@src/contexts/authContext';

import {User} from '@src/types/user';

import {
  setItemInAsyncStorage,
  getItemFromAsyncStorage,
} from '@utils/asyncStorage';

import LoginStyles from './Login.styles';

type LoginPageNavigationProps = {
  navigate: any;
  addListener: any;
};

type LoginPageProps = {
  navigation: LoginPageNavigationProps;
};

const Login: React.FC<LoginPageProps> = ({navigation}) => {
  const styles = useThemedStyles(LoginStyles);
  const {authState, updateAuthState} = useAuthContext();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const isSubmitButtonDisabled = !email || !password;

  const isIos = Platform.OS === 'ios';

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      const existingAuthState = await getItemFromAsyncStorage(
        AsyncStorageKey.AUTH_STATE,
      );

      if (existingAuthState) {
        const parsedExistingAuthState = JSON.parse(existingAuthState);
        if (parsedExistingAuthState) {
          updateAuthState(parsedExistingAuthState);
        }
      }
    });

    return unsubscribe;
  }, [navigation, updateAuthState]);

  useEffect(() => {
    if (authState.isAuth) {
      navigation.navigate(Routes.HOME);
    }
  }, [authState.isAuth, navigation]);

  const handleSubmit = async () => {
    let userList: Array<User> = [];

    const existingUserList = await getItemFromAsyncStorage(
      AsyncStorageKey.USER_LIST,
    );

    if (existingUserList) {
      userList = JSON.parse(existingUserList);
    }

    const isUserExists = userList.find(
      u => u.email === email && u.password === password,
    );

    if (isUserExists) {
      Alert.alert('Success', 'Login success', [
        {
          text: 'OK',
          onPress: async () => {
            setEmail('');
            setPassword('');
            updateAuthState({isAuth: true});
            await setItemInAsyncStorage({
              key: AsyncStorageKey.AUTH_STATE,
              value: JSON.stringify({isAuth: true}),
            });
          },
        },
      ]);
    } else {
      Alert.alert('Login Failed', 'User not found');
    }
  };

  const goToRegisterPage = () => navigation.navigate(Routes.REGISTER);

  return (
    <View style={styles.root}>
      <Header title="Sign In" />
      <View style={styles.body}>
        <TextInput
          placeholder="Email"
          inputMode="text"
          style={[styles.textInput, isIos && styles.textInputPaddingIos]}
          value={email}
          onChangeText={(text: string) => setEmail(text)}
        />
        <View>
          <TextInput
            placeholder="Password"
            inputMode="text"
            secureTextEntry={!showPassword}
            style={[styles.textInput, isIos && styles.textInputPaddingIos]}
            value={password}
            onChangeText={(text: string) => setPassword(text)}
          />
          <TouchableOpacity
            style={styles.showPasswordButton}
            onPress={() => setShowPassword(!showPassword)}>
            <Text>show</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            text="Submit"
            disabled={isSubmitButtonDisabled}
            onPress={handleSubmit}
          />
        </View>
        <View style={styles.goToRegisterButtonContainer}>
          <Text testID="dont-have-account-text">Don't have account ?</Text>
          <TouchableOpacity
            testID="go-to-register-button"
            onPress={goToRegisterPage}>
            <Text style={styles.goToRegisterButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
