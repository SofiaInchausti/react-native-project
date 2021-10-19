import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {Provider} from 'react-redux'
import store from './src/store/index'
import Tabs from './navigation/tabs';

export default function App() {
  return (
    <Provider store={store}>
   <NavigationContainer testID='nav-container'>
     <Tabs testID='screens'/>
   </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
