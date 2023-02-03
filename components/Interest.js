import React, { useState } from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View,FlatList } from 'react-native';

const data = [
    { key: '1', name: '⚽️ Football' },
    { key: '2', name: '🏄 Swimming' },
    { key: '3', name: '🎹 Piano' },
    { key: '4', name: '🎺 Saxophone' },
    { key: '5', name: '🥋 Karate' },
  ];

export default function Interest() {
    const [selected, setSelected] = useState([]);

    const onPressItem = (item) => {
      const selectedIndex = selected.indexOf(item.key);
      if (selectedIndex > -1) {
        setSelected([...selected.slice(0, selectedIndex), ...selected.slice(selectedIndex + 1)]);
      } else {
        setSelected([...selected, item.key]);
      }
    };
  
    const renderItem = ({ item }) => {
      const backgroundColor = selected.indexOf(item.key) > -1 ? '#D886CD' : '#fff';
      return (
        <TouchableOpacity onPress={() => onPressItem(item)}>
          <View style={{ backgroundColor,marginRight:5,borderWidth:1,borderColor:'#e5e5e5',justifyContent:'center',alignItems:'center',
        borderRadius:50,
        paddingHorizontal:20,paddingVertical:12}}>
            <Text style={{fontWeight:'600',fontSize:16,color:backgroundColor == "#D886CD" ? '#fff' : 'black' }}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      );
    };

  return (
    <View style={styles.container}>

        <Text style={{fontWeight:'bold',fontSize:18,marginTop:25}}>Interests</Text>

        <View style={{paddingVertical:20}}>
        <FlatList
        horizontal={true}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        />
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    justifyContent:'center',
    paddingHorizontal:20,
  },

});
