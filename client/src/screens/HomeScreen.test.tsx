import React from 'react';
import { render, RenderAPI } from '@testing-library/react-native';
import HomeScreen from './HomeScreen';

describe('HomeScreen', () => {
  let component: RenderAPI;

  beforeEach(() => {
    component = render(<HomeScreen />);
  });

  it('renders correctly', () => {
    const { getByText } = component;
    const welcomeText = getByText('Welcome to Fitness Tracker');
    expect(welcomeText).toBeTruthy();
  });
});