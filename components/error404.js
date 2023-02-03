
import React,{ useState } from 'react'
import { StyleSheet, Text, Image ,View, ImageBackground, TouchableOpacity } from 'react-native';
import { Ionicons ,MaterialCommunityIcons } from '@expo/vector-icons';




export default function Error404() {



  return (
    <ImageBackground source={require('../assets/errorbg.png')} style={styles.container}>
       
    <View style={styles.header}>
      <Text style={styles.error}>404</Text>
    </View>

    <View style={styles.body}/>


    <View style={styles.footer}>
    <Text style={styles.subtitle}>I think you're in Trouble</Text>
    <TouchableOpacity style={styles.btn}>
      <Text style={{fontWeight:'bold'}}>Run back to your Life</Text>
    </TouchableOpacity>
    </View>


    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F5FD',
  },
  body:{
    flex:1,
  },
header:{
  flex:1,
  justifyContent:'center',
  alignItems:'center'
},
footer:{
  flex:1,
  alignItems:'center',
  justifyContent:'center'
},
error:{
  color:'#FFCA00',
  fontSize:70*2,
  fontWeight:'bold'
},
subtitle:{
  color:'white',
  fontSize:21,
  marginTop:30
},
btn:{
  backgroundColor:'#FFCA00',
  padding:20,
  justifyContent:'center',
  alignItems:'center',
  marginTop:15,
  width:'45%',
  borderRadius:15
}

});
