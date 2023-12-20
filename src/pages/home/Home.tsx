import React from 'react';
import {View, Text} from 'react-native';

import useThemedStyles from '@src/hooks/useThemedStyles';

import Header from '@components/header/Header';
import Button from '@components/button/Button';

import HomeStyles from './Home.styles';

const Home: React.FC = () => {
  const styles = useThemedStyles(HomeStyles);

  const handleLogout = () => {};

  return (
    <View style={styles.root}>
      <Header title="Dashboard" />
      <View style={styles.body}>
        <View style={styles.welcomeTextContainer}>
          <Text style={styles.welcomeText}>Welcome</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button text="Logout" onPress={handleLogout} />
        </View>
      </View>
    </View>
  );
};

export default Home;
