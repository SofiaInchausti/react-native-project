import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image } from 'react-native';
import ReadQR from '../screens/ReadQR'
import QRList from '../screens/QRList'

const Tab=createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator style={{backgroundColor:'yellow'}}>
            <Tab.Screen name='Read QR'component={ReadQR}
             options={{tabBarIcon:({focused})=>(
                 <View style={{alignItems:'center', justifyContent:'center',top:10}}>
                 <Image
                 source={require('../assets/search-qr.png')}
                 resizeMode='contain'
                 style={{
                     width:25,
                     height:25,
                     tintColor:focused? '#e32f45' : '#748c94',
                  }} />
                  <Text style={{color:focused ? '#e32f45' : '#748c94',fontSize:12}}>
                      ReadQR
                </Text>
                </View>
             ),
                 }}
                 />
            <Tab.Screen name='QR List'component={QRList}/>
        </Tab.Navigator>
    )
}
export default Tabs;