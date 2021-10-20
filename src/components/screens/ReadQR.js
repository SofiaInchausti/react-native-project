import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button,Image, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { addQR } from '../../actions';
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
    
      
      return (
        <View style={styles.container}>
          <View style={styles.barcodebox}>
            <BarCodeScanner
             testID='scanner'
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={{ height: 400, width: 400 }} />
          </View>
          <Text style={styles.scanText}>{text}</Text>    
          {scanned && 
          <TouchableOpacity testeID='button' onPress={() => setScanned(false)} >
            <View>
              <Text style={styles.questionText}>Scan again?</Text>
              <Image source={require('../assets/celScanner.png')}                 
                 style={styles.scannerImage}/>              
            </View>
            </TouchableOpacity>
        }
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
         questionText: {
            color:'#00008b',
            fontSize: 16,     
            
            
          },
          scanText:{
            fontSize: 18,
            margin: 20,
            color:'tomato',
            fontWeight:'bold'
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