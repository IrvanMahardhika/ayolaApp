import React from 'react';
import {View, Text} from 'react-native';

import useThemedStyles from '@src/hooks/useThemedStyles';

import RegisterStyles from './Register.styles';

const Register: React.FC = () => {
  const styles = useThemedStyles(RegisterStyles);

  return (
    <View style={styles.root}>
      <Text>Register page</Text>
    </View>
  );
};

export default Register;
