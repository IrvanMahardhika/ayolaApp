import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {describe, it, expect, jest} from '@jest/globals';

import AuthProvider from '@src/contexts/authContext';

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
  it('Renders correctly', () => {
    render(component);

    const headerText = screen.getByTestId('header-text');
    expect(headerText).toEqual('Sign In');
  });
});
