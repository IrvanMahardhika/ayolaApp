import React from 'react';
import {View, Text} from 'react-native';

import useThemedStyles from '@src/hooks/useThemedStyles';

import HomeStyles from './Home.styles';

const Home: React.FC = () => {
  const styles = useThemedStyles(HomeStyles);

  return (
    <View style={styles.root}>
      <Text>Home page</Text>
    </View>
  );
};

export default Home;
