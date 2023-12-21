import React from 'react';
import {render} from '@testing-library/react-native';
import {describe, it, expect, jest} from '@jest/globals';
import {NavigationContext} from '@react-navigation/native';

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

const actualNav = jest.requireActual('@react-navigation/native');
const navContext = {
  ...(actualNav as {navigation: typeof navigation}).navigation,
  navigate: () => {},
  addListener: () => () => {},
  isFocused: () => true,
};

const MOCK_PHONE_NUMBER_PARAM = '6235464646';

const component = (
  <NavigationContext.Provider value={navContext as any}>
    <AuthProvider>
      <OTP
        navigation={navigation}
        route={{params: {phoneNumber: MOCK_PHONE_NUMBER_PARAM}}}
      />
    </AuthProvider>
  </NavigationContext.Provider>
);

describe('Register page', () => {
  it('Renders correctly', () => {
    const {getByTestId} = render(component);

    const mainText = getByTestId('main-text');
    expect(mainText.props.children).toEqual('Enter Authentication Code');

    const infoText = getByTestId('info-text');
    expect(infoText.props.children).toEqual(
      `Enter the 6 digit that we have sent via the phone number to ${MOCK_PHONE_NUMBER_PARAM}`,
    );
  });
});
