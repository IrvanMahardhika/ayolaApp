import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import useThemedStyles from '@src/hooks/useThemedStyles';

import ButtonStyles from './Button.styles';

type ButtonProps = {
  text: string;
  onPress: () => void;
};

const Button: React.FC<ButtonProps> = ({text, onPress}) => {
  const styles = useThemedStyles(ButtonStyles);

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
