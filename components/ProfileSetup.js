
import React,{ useState } from 'react'
import { StyleSheet, Text,View, Image, TouchableOpacity } from 'react-native';


export default function ProfileSetup() {

  return (
    <View style={styles.container}>
       
    <View style={styles.body}>

    <Image style={{resizeMode:'cover',height:300,width:500}} source={require('../assets/congo.gif')} />

    <Text style={{fontSize:35,fontWeight:'bold',paddingTop:25,color:'#fff'}}>Congrats Emma!</Text>
    <Text style={{fontSize:35,fontWeight:'bold',color:'#fff'}}>You're set to start!</Text>
    <Text style={{fontSize:16,textAlign:'center',color:'#fff',marginTop:25}}>
        Thank you for choosing us as your trusted source! We have your back!
    </Text>

    </View>

    <View style={styles.footer}>  
        <TouchableOpacity style={styles.btn}>
        <Text style={{fontWeight:'bold',fontSize:16}}>View My Plans</Text>
        </TouchableOpacity>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4895DB',
  },
  body:{
    flex:5,
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:20
  },
footer:{
  flex:1,
  alignItems:'center',
  justifyContent:'center'
},
subtitle:{
  color:'white',
  fontSize:21,
  marginTop:30
},
btn:{
  padding:20,
  justifyContent:'center',
  alignItems:'center',
  marginTop:15,
  width:'90%',
  borderRadius:100,
  backgroundColor:'white',
  marginTop:25
}

});
