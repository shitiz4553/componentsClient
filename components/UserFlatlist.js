import React, { useState } from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View,FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const data = [
    { key: '1', profilePic: 'https://randomuser.me/api/portraits/women/54.jpg' },
    { key: '2', profilePic: 'https://randomuser.me/api/portraits/women/14.jpg' },
    { key: '3', profilePic: 'https://randomuser.me/api/portraits/women/24.jpg' },
    { key: '4', profilePic: 'https://randomuser.me/api/portraits/women/34.jpg' },
    { key: '5', profilePic: 'https://randomuser.me/api/portraits/women/74.jpg' },
    { key: '6', profilePic: 'https://randomuser.me/api/portraits/women/13.jpg' },
    { key: '7', profilePic: 'https://randomuser.me/api/portraits/women/12.jpg' },
    { key: '8', profilePic: 'https://randomuser.me/api/portraits/women/11.jpg' },
  ];

export default function UserFlatlist() {
  
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity>
           <Image source={{uri:item.profilePic}} style={{height:65,width:65,borderRadius:100,marginRight:10}} />
        </TouchableOpacity>
      );
    };

  return (
    <View style={styles.container}>

        <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={[styles.circularbutton,styles.shadowProp]}>
             <Ionicons name="close" size={28} color="#fff" />
            </TouchableOpacity>
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
    backgroundColor: '#rgb(17,19,21)',
    justifyContent:'center',
    paddingLeft:20,
  },
  circularbutton:{
    borderRadius:100,
    backgroundColor:'#17161B',
    justifyContent:'center',
    alignItems:'center',
    height:70,
    width:70,
    marginRight:10,
    backgroundColor:'#FD4344'
  },
  shadowProp: {
    shadowColor: '#FD4344',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 1,
    shadowRadius: 23,
  },
});
