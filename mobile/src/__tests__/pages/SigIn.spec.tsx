import React from 'react';
import { render } from 'react-native-testing-library';

import SigIn from '../../pages/SignIn';

jest.mock('react-native-vector-icons/Feather', () => 'Icon');
jest.mock('react-native-iphone-x-helper', () => ({
  getBottomSpace: () => 0,
}));
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('SignIn page', () => {
  it('should contains email/password inputs', () => {
    const { getByPlaceholder } = render(<SigIn />);

    expect(getByPlaceholder('E-mail')).toBeTruthy();
    expect(getByPlaceholder('Password')).toBeTruthy();
  });
});
