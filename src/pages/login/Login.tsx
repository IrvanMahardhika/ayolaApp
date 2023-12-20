import React from 'react';
import {View, Text} from 'react-native';

import useThemedStyles from '@src/hooks/useThemedStyles';

import LoginStyles from './Login.styles';

const Login: React.FC = () => {
  const styles = useThemedStyles(LoginStyles);

  return (
    <View style={styles.root}>
      <Text>Login page</Text>
    </View>
  );
};

export default Login;
