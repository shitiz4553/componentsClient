import React, { useState } from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View, SafeAreaView,FlatList } from 'react-native';
import { MaterialIcons,Ionicons } from '@expo/vector-icons';

    const ReasonCard = ({subcategory,category,value}) => {
        const [text, setText] = useState('check-box');
        
        const handlePress = () => {
            text === "check-box" ? setText("check-box-outline-blank") : setText("check-box");
          }

        return (

             <TouchableOpacity onPress={handlePress} style={styles.cardContainer}>
                <View style={[styles.fillPercentage, { width: value, backgroundColor: value < '52%' ? '#1C3AA5' :'#5598F3' }]}>
                </View>
                <View style={styles.contentWrapper}>
                 <MaterialIcons name={text} size={26} color="#fff" />
                        <View style={{marginLeft:15}}>
                            <Text style={styles.smallTitle}>{subcategory}</Text>
                            <Text style={styles.medTitle}>{category}</Text>
                        </View>
                    </View>
            </TouchableOpacity>

        );
    };


    export default function Discuss() {


        
    return (
        <SafeAreaView style={styles.container}>

                <Text style={styles.title}>What Would you like to Discuss?</Text>
                <Text style={styles.passage}>Evaluate the usefulness of the session for you</Text>

                    <View style={{height:45}}/>

                <ReasonCard value={"75%"} subcategory="Anxiety" category="Feeling of fear , dread & uneasiness"/>
                <ReasonCard value={"25%"} subcategory="Depression" category="Feeling sad & loss of interest" />

                <View style={{height:45}}/>

                <View style={{flexDirection:'row',alignItems:'space-evenly',justifyContent:'center'}}>
                        <TouchableOpacity style={{
                            width:55,height:55,
                            justifyContent:'center',
                            alignItems:'center',
                            backgroundColor:'#1F47D6',
                            borderRadius:100}}>
                             <Ionicons name="md-arrow-back-sharp" size={24} color="#fff" />
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            height:60,
                            justifyContent:'center',
                            alignItems:'center',
                            backgroundColor:'#fff',
                            borderRadius:100,
                            width:'70%',
                            marginLeft:20}}>
                             <Text style={{fontWeight:'600',fontSize:16}}>Next Question</Text>
                        </TouchableOpacity>

                </View>

        </SafeAreaView>
    );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D59F0',
    alignItems:'center',
    justifyContent:'center'
  },
  box:{
    paddingHorizontal:20,
    paddingVertical:45,
    backgroundColor:'#fff',
    width:250,
    borderRadius:25,
    justifyContent:'center',
    alignItems:'center'
  },
  shadowProp: {
    shadowColor: '#ba6e90',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 7,
  },
  title:{
    fontWeight:'600',
    fontSize:32,
    textAlign:'left',
    color:'#fff'
  },
  passage:{
    opacity:0.6,
    lineHeight:20,
    fontSize:16,
    marginTop:10,
    color:'#fff'
  },
  cardContainer:{
    width:'90%',
    borderRadius:15,
    backgroundColor:'#2148D4',
    height:75,
    paddig:15,
    marginTop:20
  },
  fillPercentage:{
    height:'100%',
    borderTopLeftRadius:15,
    borderBottomLeftRadius:15,
  },
  contentWrapper:{
    flexDirection:'row',
    alignItems:'center',
    zIndex:1111,
    position: 'absolute',
    width: '90%',
    height: '100%',
    left:20
  },
  smallTitle:{
    color:'#fff',
    opacity:0.5,
    fontSize:12,
    marginBottom:2
  },
  medTitle:{
    color:'#fff',
    fontWeight:'600',
    fontSize:16
  }
});
