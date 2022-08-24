/**
 * @format
 */

import 'react-native';
import React from 'react';
import LoginScreen from '../src/screens/LoginScreen';
import { renderWithRedux } from '../src/helpers/testHelpers';
jest.useFakeTimers();
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
it('renders correctly', () => {
  const page = renderWithRedux(<LoginScreen />);

  const form = page.getByTestId('submitBtn');
});
