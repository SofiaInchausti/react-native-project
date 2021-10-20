import React from 'react';
import {
  render,
} from '@testing-library/react-native';
import App from '../App';

let component;

describe('<App />', () => {
  beforeEach(() => {
    component = render(<App />);
  });
  it('It should render correctly', () => {
    expect(component).toBeDefined();
  });
  it('it should render <NavigationContainer/>', () => {
    expect(component.queryByTestId('nav-container')).toBeDefined();
  });
  it('It should render <Tabs/> component', () => {
    expect(component.queryByTestId('screens')).toBeDefined();
  });
});
