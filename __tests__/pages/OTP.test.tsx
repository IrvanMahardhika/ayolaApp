import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {describe, it, expect, jest} from '@jest/globals';

import AuthProvider from '@src/contexts/authContext';

import OTP from '@src/pages/otp/OTP';

const navigate = jest.fn();
const addListener = jest.fn();
const pop = jest.fn();

const navigation = {
  navigate: navigate as unknown,
  addListener: addListener as unknown,
  pop: pop as unknown,
};

const component = (
  <AuthProvider>
    <OTP
      navigation={navigation}
      route={{params: {phoneNumber: '6235464646'}}}
    />
  </AuthProvider>
);

describe('Register page', () => {
  it('Renders correctly', () => {
    render(component);

    const headerText = screen.getByTestId('main-text');
    expect(headerText).toEqual('Enter Authentication Code');
  });
});
