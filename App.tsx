/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Register from '@src/pages/register/Register';
import OTP from '@src/pages/otp/OTP';
import Login from '@src/pages/login/Login';
import Home from '@src/pages/home/Home';

import {Routes, RootStackParamType} from '@constants/Routes';

const Stack = createNativeStackNavigator<RootStackParamType>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.LOGIN}>
        <Stack.Screen
          name={Routes.REGISTER}
          component={Register}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name={Routes.OTP}
          component={OTP}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name={Routes.LOGIN}
          component={Login}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name={Routes.HOME}
          component={Home}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
