import {
 Text, View, TextInput, TouchableOpacity, FlatList, StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { filterSearch, removeItem } from '../../actions';

const QRList = () => {
    const qrs = useSelector((state) => state?.filter);
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    function searchFilter(elem) {
        dispatch(filterSearch(elem));
        setText(elem);
    }
    function onRemove(item) {
        dispatch(removeItem(item));
    }

    return (
      <View style={styles.container}>
        {qrs && qrs.length > 0
            ? (
              <View textID="qrs-container">
                <TextInput
                  testID="search-input"
                  style={styles.inputText}
                  onChangeText={(e) => searchFilter(e)}
                  onClear={() => searchFilter('')}
                  placeholder="Type here..."
                  value={text}
                />

                <FlatList
                  testID="list"
                  data={qrs}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                    <View style={styles.contenedor}>
                      <TouchableOpacity>
                        <View style={styles.itemContainer}>
                          <Text style={styles.text}>{ item }</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Text style={styles.buttonText} onPress={() => onRemove(item)}>
                          <AntDesign name="delete" size={18} color="tomato" />
                        </Text>
                      </TouchableOpacity>
                    </View>

            )}
                />
              </View>
)
            : <Text style={styles.textEmpty} testID="default-text">Empty List</Text> }
      </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    textEmpty: {
        color: '#00008b',
        fontSize: 18,
        margin: 20,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 10,
        color: '#2E2E30',

        },
        contenedor: {
            backgroundColor: '#D3D1E4',
            margin: 5,
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'center',

        },
        inputText: {
      height: 30,
      borderWidth: 1,
      borderColor: '#cecece',
      marginBottom: 10,
      marginHorizontal: 10,
    },
  });
export default QRList;
