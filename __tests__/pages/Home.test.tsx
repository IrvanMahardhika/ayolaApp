import React from 'react';
import {render} from '@testing-library/react-native';
import {describe, it, expect, jest} from '@jest/globals';

import AuthProvider from '@src/contexts/authContext';

import Home from '@src/pages/home/Home';

const navigate = jest.fn();
const addListener = jest.fn();

const navigation = {
  navigate: navigate as unknown,
  addListener: addListener as unknown,
};

const component = (
  <AuthProvider>
    <Home navigation={navigation} />
  </AuthProvider>
);

describe('Home page', () => {
  it('Renders correctly', () => {
    const {getByTestId} = render(component);

    const headerText = getByTestId('header-text');
    expect(headerText.props.children).toEqual('Dashboard');

    const welcomeText = getByTestId('welcome-text');
    expect(welcomeText.props.children).toEqual('Welcome');
  });
});
