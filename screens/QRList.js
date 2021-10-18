import { StyleSheet, Text, View, TextInput, TouchableOpacity , FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import { useSelector } from "react-redux"
import {filterSearch} from '../src/actions'
import { useDispatch } from 'react-redux'


const QRList = () => {
    let qrs=useSelector(state=>state?.filter) 
    const [text,setText]=useState('')  
    const dispatch = useDispatch()
    
    function searchFilter(text){
        dispatch (filterSearch(text))
        setText(text);
    }

    // const searchFilter=(text)=>{
    //     if(text){
    //         const newData=qrs.filter(function(item){
    //             const itemData = item
    //                   ? item.toUpperCase()
    //                   : ''.toUpperCase();
    //                 const textData = text.toUpperCase();
    //                 return itemData.indexOf(textData) > -1;
    //               });
    //               setFilter(newData);
    //               setText(text);
    //             }
    //     else{
    //         setFilter(qrs)
    //         setText(text)
    //     }
    // }


    return(
        <View>
            {qrs ?  
            <View>
            <TextInput
            style={styles.inputText}
            onChangeText={(e) => searchFilter(e)}
            onClear={(e)=> searchFilter('')}
            placeholder='Type here...'
            value={text}
            />

            <FlatList 
            data={qrs}
            keyExtractor={(item,index)=>index.toString()}
            renderItem ={({item})=>(
                <TouchableOpacity>
                    <View>
                    <Text>{ item }</Text>    
                    </View>
                    </TouchableOpacity>
            )}/>
            </View>
            :
            <Text>Empty List</Text> }      
    </View>
    )

    
}
const styles = StyleSheet.create({
   inputText: {
      height:30,
      borderWidth:1,
      borderColor:'#cecece',
      marginBottom:10,
      marginHorizontal:10
    },
  });
export default QRList;