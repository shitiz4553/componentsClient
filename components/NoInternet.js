
import React,{ useState } from 'react'
import { StyleSheet, Text,View, Image, TouchableOpacity } from 'react-native';


export default function NoInternet() {

  return (
    <View style={styles.container}>
       
    <View style={styles.body}>

    <Image style={{resizeMode:'contain',height:210,width:200}} source={{uri:'https://cdn-icons-png.flaticon.com/512/145/145244.png'}} />

    <Text style={{fontSize:24,fontWeight:'bold',paddingVertical:25}}>No Internet Connection</Text>
    <Text style={{fontSize:16,textAlign:'center'}}>Make sure Wi-Fi or mobile data is turned on, then try again and then you can see</Text>

    <TouchableOpacity style={styles.btn}>
      <Text style={{fontWeight:'bold',color:'#fff',fontSize:16}}>Retry</Text>
    </TouchableOpacity>

    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCA00',
  },
  body:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:20
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
  width:'76%',
  borderRadius:100,
  backgroundColor:'black',
  marginTop:25
}

});
