import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import addQR from '../src/actions';
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
        console.log('Type:'+ type, 'data', data )
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
            <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
          </View>)
      }
    
      // Return the View
      return (
        <View style={styles.container}>
          <View style={styles.barcodebox}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={{ height: 400, width: 400 }} />
          </View>
          <Text style={styles.maintext}>{text}</Text>
    
          {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />}
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
            fontSize: 16,
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
          }
    })
export default ReadQR;