import {useState} from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View ,Modal, Platform} from 'react-native';
import { Feather ,AntDesign ,Entypo,FontAwesome } from '@expo/vector-icons';


const ItemCard = ({icon,name}) => {
    return(

        <TouchableOpacity style={styles.inputWrapper}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <FontAwesome name={icon} size={24} color="white" />
          <Text style={styles.title}>{name}</Text>
        </View>
        <Entypo name="chevron-right" size={24} color="white" />
        </TouchableOpacity>

    );
}

export default function StreamInfo() {


  return (
    <View style={styles.container}>


            <View style={styles.header}>
                <TouchableOpacity style={styles.circularbutton}>
                <Feather name="chevron-left" size={24} color="#3F3F3F" />
                </TouchableOpacity>
                   <Text style={styles.titlemain}>Settings</Text>
                <View style={{width:25}}/>
            </View>



            <View style={styles.body}>
                <ScrollView style={{paddingHorizontal:20}}>

                   <ItemCard name="Blocked Accounts" icon="ban"/>
                   <ItemCard name="Notifications" icon="bell-o"/>
                   <ItemCard name="Privacy Policy" icon="comment-o"/>
                   <ItemCard name="Terms of Service" icon="flag-o"/>
                   <ItemCard name="Community Guidelines" icon="shield"/>
                   <ItemCard name="Support" icon="question"/>                    

                    <TouchableOpacity style={styles.inputWrapper}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <FontAwesome name="sign-out" size={24} color="red" />
                    <Text style={[styles.title,{color:'red'}]}>Log out</Text>
                    </View>
                 
                    </TouchableOpacity>

                </ScrollView>
            </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#271B2D',
  },
  header:{
    flex: 1.1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:20,
    paddingTop:15
  },
  body:{
    flex:6,
  },
  title:{
    fontSize:16,
    fontWeight:'600',
    color:'#fff',
    marginLeft:12,
    opacity:0.8
  },
  titlemain:{
    fontSize:25,
    fontWeight:'600',
    color:'#fff',
    marginLeft:12,
  },
  inputWrapper:{
    borderRadius:10,
    backgroundColor:'#32283C',
    width:'100%',
    height:65,
    marginTop:10,
    alignItems:'center',
    paddingHorizontal:20,
    flexDirection:'row',
    justifyContent:'space-between',
  },

});
