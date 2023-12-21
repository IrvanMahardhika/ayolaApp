import React from 'react';
import {View, Text} from 'react-native';

import useThemedStyles from '@src/hooks/useThemedStyles';

import HeaderStyles from './Header.styles';

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({title}) => {
  const styles = useThemedStyles(HeaderStyles);

  return (
    <View style={styles.header}>
      <Text testID="header-text" style={styles.headerText}>
        {title}
      </Text>
    </View>
  );
};

export default Header;
