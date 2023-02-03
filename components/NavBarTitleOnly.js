import {useState} from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View ,Modal, SafeAreaView} from 'react-native';
import { Feather ,AntDesign ,Entypo } from '@expo/vector-icons';


export default function NavBarTitleOnly({title,NumIcons,iconOne,iconTwo,iconThree}) {

  return (
    <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                   <Text style={styles.title}>{title}</Text>     
                 {NumIcons == 1 ?  
                 <TouchableOpacity style={styles.circularbutton}>
                   <Feather name={iconOne} size={21} color="#3F3F3F" />
                </TouchableOpacity> 
                : NumIcons == 2 ? 
                    <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.circularbutton}>
                    <Feather name={iconOne} size={21} color="#3F3F3F" />
                    </TouchableOpacity>
                    <View style={{width:10}}/>
                    <TouchableOpacity style={styles.circularbutton}>
                    <Feather name={iconTwo} size={21} color="#3F3F3F" />
                    </TouchableOpacity> 
                    </View>: NumIcons == 3 ? 
                     <View style={{flexDirection:'row'}}>
                     <TouchableOpacity style={styles.circularbutton}>
                     <Feather name={iconOne} size={21} color="#3F3F3F" />
                     </TouchableOpacity>
                     <View style={{width:10}}/>
                     <TouchableOpacity style={styles.circularbutton}>
                     <Feather name={iconTwo} size={21} color="#3F3F3F" />
                     </TouchableOpacity> 
                     <View style={{width:10}}/>
                     <TouchableOpacity style={styles.circularbutton}>
                     <Feather name={iconThree} size={21} color="#3F3F3F" />
                     </TouchableOpacity> 
                     </View> : null
                    }
                
            </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:20,
    backgroundColor:'#fff',
    width:'100%',
    height:70
  },
  body:{
    flex:5,
  },

  title:{
    fontSize:25,
    fontWeight:'800',
  },
  circularbutton:{
    borderRadius:100,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center',
    height:45,
    width:45,
    borderWidth:1,
    borderColor:'#e5e5e5'
  },
 
});
