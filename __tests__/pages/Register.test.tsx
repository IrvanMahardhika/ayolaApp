import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {describe, it, expect, jest} from '@jest/globals';
import {NavigationContext} from '@react-navigation/native';

import AuthProvider from '@src/contexts/authContext';

import {Routes} from '@src/constants/Routes';

import Register from '@src/pages/register/Register';

const navigate = jest.fn();
const addListener = jest.fn();

const navigation = {
  navigate: navigate as unknown,
  addListener: addListener as unknown,
};

const actualNav = jest.requireActual('@react-navigation/native');
const navContext = {
  ...(actualNav as {navigation: typeof navigation}).navigation,
  navigate: () => {},
  addListener: () => () => {},
  isFocused: () => true,
};

const component = (
  <NavigationContext.Provider value={navContext as any}>
    <AuthProvider>
      <Register navigation={navigation} />
    </AuthProvider>
  </NavigationContext.Provider>
);

describe('Register page', () => {
  it('Renders correctly', () => {
    const {getByTestId} = render(component);

    const headerText = getByTestId('header-text');
    expect(headerText.props.children).toEqual('Sign Up');

    const alreadyHaveAccountText = getByTestId('already-have-account-text');
    expect(alreadyHaveAccountText.props.children).toEqual(
      'Already have account ?',
    );
  });

  it('Go-to-login-button navigates to login page', () => {
    const {getByTestId} = render(component);

    const goToLoginButton = getByTestId('go-to-login-button');
    fireEvent.press(goToLoginButton);
    expect(navigate).toBeCalledWith(Routes.LOGIN);
  });
});
