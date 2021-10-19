import { StyleSheet, Text, View, TextInput, TouchableOpacity , FlatList, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import { useSelector } from "react-redux"
import {filterSearch,removeItem} from '../src/actions'
import { useDispatch } from 'react-redux'


const QRList = () => {
    let qrs=useSelector(state=>state?.filter) 
    const [text,setText]=useState('')  
    const dispatch = useDispatch()
    
    function searchFilter(text){
        dispatch (filterSearch(text))
        setText(text);
    }
    function onRemove (item){
        dispatch (removeItem(item))
    }

    return(
        <View style={styles.listContainer}>
            {qrs ?  
            <View textID="qrs-container">
            <TextInput
            testID='search-input'
            style={styles.inputText}
            onChangeText={(e) => searchFilter(e)}
            onClear={(e)=> searchFilter('')}
            placeholder='Type here...'
            value={text}
            />           

            <FlatList
            testID='list'  
            data={qrs}
            keyExtractor={(item,index)=>index.toString()}
            renderItem ={({item})=>(
                <View>
                <TouchableOpacity>
                    <View style={styles.itemContainer}>
                    <Text style={styles.text}>{ item }</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={styles.buttonText} onPress={()=>onRemove(item)}>
                      {/* <Icon name="delete" size={30} color="#e33057" /> */}X
                    </Text>
                    </TouchableOpacity>
                </View>
                    
                 
            )}/>
            </View>
            :
            <Text testID='default-text'>Empty List</Text> }      
    </View>
    )

    
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20
    },
    listContainer:{
        flex:1,
        flexDirection:'row',
        marginLeft:20,
        justifyContent:'flex-start',
        margin:15
    },
    text:{
        marginLeft:20,
        marginTop:5,
        fontWeight:'bold',
        fontSize:16,
        
        },
   inputText: {
      height:30,
      borderWidth:1,
      borderColor:'#cecece',
      marginBottom:10,
      marginHorizontal:10
    },
  });
export default QRList;