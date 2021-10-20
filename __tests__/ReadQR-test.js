import 'react-native';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react-native';
import reducer from '../src/reducer/index';
import ReadQR from '../src/components/screens/ReadQR';

const store = createStore(reducer, { status: 'default' });

let component;

describe('<ReadQR/>', () => {
  beforeEach(() => {
    component = render(<Provider store={store}><ReadQR /></Provider>);
  });
  it('It should render', () => {
    expect(component).toBeDefined();
  });
  it("it should render '<BarCodeScanned/>'", () => {
    expect(component.queryByTestId('scanner')).toBeDefined();
  });
  it('It should render a <Button/> after the first scan', () => {
    expect(component.queryAllByTestId('button').length).toEqual(0);
  });
});
