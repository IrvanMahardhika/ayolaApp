import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {describe, it, expect, jest} from '@jest/globals';

import AuthProvider from '@src/contexts/authContext';

import {Routes} from '@src/constants/Routes';

import Login from '@src/pages/login/Login';

const navigate = jest.fn();
const addListener = jest.fn();

const navigation = {
  navigate: navigate as unknown,
  addListener: addListener as unknown,
};

const component = (
  <AuthProvider>
    <Login navigation={navigation} />
  </AuthProvider>
);

describe('Login page', () => {
  it('Renders correctly', async () => {
    const {getByTestId} = render(component);

    const headerText = getByTestId('header-text');
    expect(headerText.props.children).toEqual('Sign In');

    const dontHaveAccountText = getByTestId('dont-have-account-text');
    expect(dontHaveAccountText.props.children).toEqual("Don't have account ?");
  });

  it('Go-to-register-page button navigates to Register page', () => {
    const {getByTestId} = render(component);

    const goToRegisterButton = getByTestId('go-to-register-button');
    fireEvent.press(goToRegisterButton);
    expect(navigate).toBeCalledWith(Routes.REGISTER);
  });
});
