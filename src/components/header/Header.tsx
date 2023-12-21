import React from 'react';
import {View, Text, Platform} from 'react-native';

import useThemedStyles from '@src/hooks/useThemedStyles';

import HeaderStyles from './Header.styles';

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({title}) => {
  const styles = useThemedStyles(HeaderStyles);

  const isIos = Platform.OS === 'ios';

  return (
    <View style={[styles.header, isIos && styles.paddingTopIos]}>
      <Text testID="header-text" style={styles.headerText}>
        {title}
      </Text>
    </View>
  );
};

export default Header;
