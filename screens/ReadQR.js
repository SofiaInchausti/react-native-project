import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button,Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { addQR } from '../src/actions';
import {useDispatch} from 'react-redux'


const ReadQR = () =>{
    const [hasPermission, setHasPrermission]=useState(null);
    const [scanned, setScanned]= useState(false);
    const [text, setText]= useState ('Not yet scanned')
    const dispatch=useDispatch();

    const askForPermission=()=>{
        (async()=>{
            const {status}=await BarCodeScanner.requestPermissionsAsync();
            setHasPrermission (status==='granted')
        })()
        
    }

    useEffect(() => {
        askForPermission();
    },[]);

    const handleBarCodeScanned =({type,data})=>{
        setScanned(true);
        dispatch (addQR(data));
        setText(data)
    }
    //check permition
    if(hasPermission===null){
        return (
            <View style={styles.container}>
                <Text>Requesting for camera permission</Text>
            </View>
        )
    }
    if (hasPermission === false) {
        return (
          <View style={styles.container}>
            <Text style={{ margin: 10 }}>No access to camera</Text>
            <Button title={'Allow Camera'} onPress={() => askForPermission()} />
          </View>)
      }
    
      // Return the View
      return (
        <View style={styles.container}>
          <View style={styles.barcodebox}>
            <BarCodeScanner
             testID='scanner'
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={{ height: 400, width: 400 }} />
          </View>
          <Text style={styles.maintext}>{text}</Text>    
          {scanned && <Button testeID='button' title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />}
        <Image source={require('../assets/celScanner.png')}                 
                 style={styles.scannerImage} />
        </View>
      );
    }
    const styles=StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          },
          maintext: {
            color:'#00008b',
            fontSize: 18,
            margin: 20,
          },
          barcodebox: {
            alignItems: 'center',
            justifyContent: 'center',
            height: 300,
            width: 300,
            overflow: 'hidden',
            borderRadius: 30,
            backgroundColor: 'tomato'
          },
          scannerImage:{
            width:70,
            height:70,
            borderRadius:30
                    

          }
    })
export default ReadQR;