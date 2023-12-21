import {jest} from '@jest/globals';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import {mockDefaultTheme} from './__mocks__/defaultThemeExport';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('./src/hooks/useTheme', () => () => mockDefaultTheme);

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
}));

jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: () => {
    return {
      Navigator: () => 'whatever',
      Screen: () => 'whatever',
    };
  },
}));

jest.mock('react-native-splash-screen', () => {});
