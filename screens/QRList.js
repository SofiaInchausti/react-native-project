import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from "react-redux"


const QRList = () => {
    const qrs=useSelector(state=>state.qrs)  
    console.log(qrs,'qrs')    
    
    return(
        <View>
           {qrs ? qrs.map((data,index)=>{
                return(                   
                    <Text key={index}> {data} </Text>
                 
                )
            }
            )
            : <Text> Empty List </Text>
        }
                
        
</View>
    )

    
}
export default QRList;