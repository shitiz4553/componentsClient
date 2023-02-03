
import React,{ useState } from 'react'
import { StyleSheet, Text, Image ,View, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons ,MaterialCommunityIcons } from '@expo/vector-icons';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import InfoCard from './SmallModels/InfoCard';
import SuccessCard from './SmallModels/SuccessCard';
import WarningCard from './SmallModels/WarningCard';
import CriticalCard from './SmallModels/CriticalCard';




export default function SmallModels() {



  return (
    <View style={styles.container}>
       

    <View style={styles.body}>

    <InfoCard 
    title={"Your Info Message - make it short"} 
    description={"Describe the event and give further instructions if needed,including links to other pages."} 
    />
    <View style={{height:25}} />
    <SuccessCard 
    title={"Your Success Message - make it short"} 
    description={"Describe the event and give further instructions if needed,including links to other pages."} 
    />
    <View style={{height:25}} />
    <WarningCard 
    title={"Your Warning Message - make it short"} 
    description={"Describe the event and give further instructions if needed,including links to other pages."} 
    />
    <View style={{height:25}} />     
    <CriticalCard 
    title={"Your Critical Message - make it short"} 
    description={"Describe the event and give further instructions if needed,including links to other pages."} 
    />
       
       
    </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F5FD',
  },
  image:{
    height:'100%',
    width:'100%',
  },
  body:{
    flex:1,
    paddingHorizontal:20,
    justifyContent:'center',
    
  },
  mainTitle:{
    fontSize:25,
    fontWeight:'bold'
  },
  text:{
    marginTop:15,
    fontStyle:'italic'
  },
  subtitle:{
    opacity:0.6,
    marginVertical:15
  },

});
