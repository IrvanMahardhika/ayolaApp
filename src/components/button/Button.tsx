import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import useThemedStyles from '@src/hooks/useThemedStyles';

import ButtonStyles from './Button.styles';

type ButtonProps = {
  text: string;
  onPress: () => void;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({text, disabled, onPress}) => {
  const styles = useThemedStyles(ButtonStyles);

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, disabled && styles.buttonDisabled]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
