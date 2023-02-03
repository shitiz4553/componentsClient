
import React,{ useState } from 'react'
import { StyleSheet, Text, Image ,View, SafeAreaView, TouchableOpacity } from 'react-native';
import { Entypo  } from '@expo/vector-icons';



export default function CriticalCard({title,description}) {

  return (
    <View style={[styles.container,styles.shadowProp]}>
        <Entypo name="circle-with-cross" size={22} color="#E8684A" />
        <View style={{paddingHorizontal:10}}>
         <Text style={styles.mainHead}>{title}</Text>
         <Text style={styles.subHead}>{description}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical:20,
    paddingHorizontal:20,
    flexDirection:'row',
  },
  shadowProp: {
    shadowColor: '#7c7c7c',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 7,
  },
  mainHead:{
    color:'#E8684A',
    fontSize:16,
    fontWeight:'450'
  },
  subHead:{
    fontSize:14,
    fontWeight:'250',
    opacity:0.6,
    lineHeight:17,
    paddingTop:3
  }
});
