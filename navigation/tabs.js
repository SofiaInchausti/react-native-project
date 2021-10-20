import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image } from 'react-native';
import ReadQR from '../screens/ReadQR'
import QRList from '../screens/QRList'
import { NavigationContainer } from '@react-navigation/native';

const Tab=createBottomTabNavigator();

const Tabs = () => {
    return(
       
        <Tab.Navigator >
            <Tab.Screen name='Read QR'component={ReadQR}
             options={{tabBarIcon:()=>(
                 <View style={{alignItems:'center', justifyContent:'center',top:10}}>
                 <Image
                 source={require('../assets/search-qr.png')}
                 resizeMode='contain'
                 style={styles.qrReader} />
                 
                </View>
             ),
                 }}
                 />
            <Tab.Screen name='QR List'component={QRList}
            options={{tabBarIcon:()=>(
            <View style={{alignItems:'center', justifyContent:'center',top:10}}>
                 <Image
                 source={require('../assets/list-icon.png')}
                 resizeMode='contain'
                 style={styles.listIcon} />
                 
                 </View>
             ),
                 }}
                 />
        </Tab.Navigator>
        
    )
}
const styles=StyleSheet.create({
    listIcon: {
        width:80,
        height:80,
        marginBottom:10,
        
      },
    qrReader:{
        width:30,
        height:30,
        marginBottom:10
   }
})
export default Tabs;