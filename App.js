import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store/index';
import Tabs from './src/components/navigation/tabs';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer testID="nav-container">
        <Tabs testID="screens" />
      </NavigationContainer>
    </Provider>
  );
}
