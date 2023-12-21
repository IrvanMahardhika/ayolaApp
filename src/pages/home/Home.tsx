import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import useThemedStyles from '@src/hooks/useThemedStyles';

import Header from '@components/header/Header';
import Button from '@components/button/Button';

import {AsyncStorageKey} from '@constants/asyncStorageKeys';
import {useAuthContext} from '@src/contexts/authContext';

import {Routes} from '@constants/Routes';

import {removeItemInAsyncStorage} from '@utils/asyncStorage';

import HomeStyles from './Home.styles';

type HomePageNavigationProps = {
  navigate: any;
};

type HomePageProps = {
  navigation: HomePageNavigationProps;
};

const Home: React.FC<HomePageProps> = ({navigation}) => {
  const styles = useThemedStyles(HomeStyles);
  const {authState, updateAuthState} = useAuthContext();

  useEffect(() => {
    if (!authState.isAuth) {
      navigation.navigate(Routes.LOGIN);
    }
  }, [authState.isAuth, navigation]);

  const handleLogout = () => {
    updateAuthState({isAuth: false});
    removeItemInAsyncStorage(AsyncStorageKey.AUTH_STATE);
  };

  return (
    <View style={styles.root}>
      <Header title="Dashboard" />
      <View style={styles.body}>
        <View style={styles.welcomeTextContainer}>
          <Text testID="welcome-text" style={styles.welcomeText}>
            Welcome
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button text="Logout" onPress={handleLogout} />
        </View>
      </View>
    </View>
  );
};

export default Home;
