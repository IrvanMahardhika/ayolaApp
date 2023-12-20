import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import useThemedStyles from '@src/hooks/useThemedStyles';

import Header from '@components/header/Header';
import Button from '@components/button/Button';

import LoginStyles from './Login.styles';

const Login: React.FC = () => {
  const styles = useThemedStyles(LoginStyles);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = () => {
    console.log('email -- ', email);
    console.log('password -- ', password);
  };

  const goToRegisterPage = () => {
    console.log('go to register page');
  };

  return (
    <View style={styles.root}>
      <Header title="Sign In" />
      <View style={styles.body}>
        <TextInput
          placeholder="Email"
          inputMode="text"
          style={styles.textInput}
          value={email}
          onChangeText={(text: string) => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          inputMode="text"
          secureTextEntry
          style={styles.textInput}
          value={password}
          onChangeText={(text: string) => setPassword(text)}
        />
        <View style={styles.buttonContainer}>
          <Button text="Submit" onPress={handleSubmit} />
        </View>
        <View style={styles.goToRegisterButtonContainer}>
          <Text>Don't have account ?</Text>
          <TouchableOpacity onPress={goToRegisterPage}>
            <Text style={styles.goToRegisterButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
