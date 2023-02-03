import {useState} from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View ,Modal, Platform} from 'react-native';
import { Feather ,AntDesign ,Entypo } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown'


export default function StreamInfo() {

    const countries = ["Egypt", "Canada", "Australia", "Ireland"]

  return (
    <View style={styles.container}>


            <View style={styles.header}>
                <TouchableOpacity style={styles.circularbutton}>
                 <AntDesign name="close" size={22} color="#3F3F3F" />
                </TouchableOpacity>
                   <Text style={styles.title}>Stream Info</Text>
                <TouchableOpacity style={styles.circularbutton}>
                  <Feather name="chevron-right" size={24} color="#3F3F3F" />
                </TouchableOpacity>
            </View>



            <View style={styles.body}>
                <ScrollView style={{paddingHorizontal:20}}>

                    <Text style={styles.subtitle}>Title</Text>
                    <View style={styles.inputWrapper}>
                     <TextInput placeholderTextColor={'#59585D'} placeholder="Title your stream Here" style={styles.inputContainer} />
                    </View>

                    <View style={{height:35}} />

                    <Text style={styles.subtitle}>Category</Text>
                    <View style={styles.inputWrapperHorizontal}>
                     <TextInput placeholderTextColor={'#59585D'} placeholder="Title your stream Here" style={styles.inputContainer} />
                       <TouchableOpacity>
                       <Feather name="search" size={22} color="#59585D" />
                       </TouchableOpacity>
                    </View>
                    <Text style={styles.subtitlesmall}>All content must adhere to and be acategorized according to our guidelines</Text>


                    <View style={{height:35}} />


                    <Text style={styles.subtitle}>Live Notification</Text>
                    <View style={styles.inputWrapper}>
                     <Text style={{color:'#fff',opacity:0.5,fontSize:16}}>Max went live</Text>
                    </View>
                    <Text style={styles.subtitlesmall}>You can send only one notification</Text>

                    <View style={{height:35}} />

                    <Text style={styles.subtitle}>Tags</Text>
                    <View style={{flexDirection:'row',alignItems:'center',width:'100%',justifyContent:'space-between'}}>
                     <View style={styles.inputWrapperHalf}>
                      <TextInput placeholderTextColor={'#59585D'} placeholder="Enter your tag" style={styles.inputContainer} />
                     </View>
                     <TouchableOpacity style={styles.inputWrapperRed}>
                        <Text style={{fontSize:16,fontWeight:'bold',color:'#fff'}}>Add Tag</Text>
                    </TouchableOpacity>
                    </View>
                    <Text style={styles.subtitlesmall}>Tags are visible to others</Text>


                    <View style={{height:35}} />


                    <Text style={styles.subtitle}>Stream Language</Text>
                    <View style={styles.inputWrapperHorizontal}>
                    
                        <SelectDropdown
                        buttonStyle={{
                            backgroundColor:null,
                            justifyContent:'flex-start',
                            margin:0
                        }}
                        buttonTextStyle={{
                            color:'#fff',
                            opacity:0.5,
                            textAlign:'left'
                        }}
                        dropdownStyle={{
                        backgroundColor:'#17161B'
                        }}
                        rowStyle={{
                            borderBottomWidth:0
                        }}
                        rowTextStyle={{
                            color:'#fff',
                            opacity:0.5,
                        }}

                        data={countries}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}/>
                                        
                       <TouchableOpacity>
                       <Entypo name="select-arrows" size={18} color="#59585D" />
                       </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>


            <View style={styles.footer}>
                    <TouchableOpacity style={styles.mainbutton}>
                            <Text style={{fontWeight:'bold',fontSize:16}}>Add Stream Marker</Text>
                    </TouchableOpacity>
            </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#100F14',
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
    flex:5,
  },
  footer:{
    flex:0.8,
    paddingHorizontal:20,
    backgroundColor:'#17171D',
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
    fontSize:25,
    fontWeight:'600',
    color:'#fff'
  },
  circularbutton:{
    borderRadius:100,
    backgroundColor:'#17161B',
    justifyContent:'center',
    alignItems:'center',
    height:45,
    width:45
  },
  subtitle:{
        color:'#59585D',
        fontWeight:'700',
        fontSize:16
  },
  subtitlesmall:{
    color:'#59585D',
    fontSize:13,
    marginTop:15
},
  inputWrapper:{
    borderRadius:100,
    backgroundColor:'#17161B',
    width:'100%',
    height:60,
    marginTop:10,
    justifyContent:'center',
    paddingHorizontal:15
  },
  inputWrapperHalf:{
    borderRadius:100,
    backgroundColor:'#17161B',
    width:'65%',
    height:60,
    marginTop:10,
    justifyContent:'center',
    paddingHorizontal:15
  },
  inputWrapperRed:{
    borderRadius:100,
    backgroundColor:'#EF1A41',
    width:'30%',
    height:60,
    marginTop:10,
    justifyContent:'center',
    alignItems:'center'
  },
  inputContainer:{
    paddingHorizontal:10,
    color:'#fff',   
    fontSize:16
  },
  inputWrapperHorizontal:{
    borderRadius:100,
    backgroundColor:'#17161B',
    width:'100%',
    height:55,
    marginTop:10,
    alignItems:'center',
    paddingLeft:0,
    paddingRight:15,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  mainbutton:{
    backgroundColor:'#FFCC5F',
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center',
    height:58,
    width:'100%'
  }
});
