import {useState} from 'react';
import {  StyleSheet, Text, TextInput, TouchableOpacity, View ,ImageBackground,Image, KeyboardAvoidingView,Platform,Dimensions} from 'react-native';
import { Feather ,AntDesign ,FontAwesome } from '@expo/vector-icons';


const bg ="https://celebmafia.com/wp-content/uploads/2020/06/lily-chee-instagram-live-video-06-25-2020-2_thumbnail.jpg"
const guy ="https://img.freepik.com/free-photo/bearded-man-grey-sweatshirt-wearing-red-glasses-looking-camera-happy-positive-smiling-broadly-standing-orange-background_141793-110747.jpg"


const userpic = "https://randomuser.me/api/portraits/women/54.jpg"
const userpictwo = "https://randomuser.me/api/portraits/women/14.jpg"
const userpicthree = "https://randomuser.me/api/portraits/women/34.jpg"

const UserMessage = ({pic,name,message}) =>{
    return(
        <View style={{flexDirection:'row',marginBottom:20}}>
                <Image source={{uri:pic}} style={{height:40,width:40,borderRadius:100,marginRight:15}} />
                <View>
                    <Text style={{fontWeight:'400',fontSize:13,color:'#fff',opacity:0.4}}>{name}</Text>
                    <Text style={{fontWeight:'400',fontSize:13,color:'#fff',opacity:0.7,marginTop:3}}>{message}</Text>
                </View>
        </View>
    );
}


export default function LiveScreen() {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    

  return (
    <ImageBackground imageStyle={{opacity:0.2}} source={{uri:bg}} style={styles.container}>


            <View style={styles.header}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <TouchableOpacity style={styles.circularbutton}>
                    <AntDesign name="back" size={22} color="#fff" />
                    </TouchableOpacity>
                    <Image source={{uri:guy}} style={styles.liveperson} />
                    <Text style={[styles.title,{marginLeft:10}]}>Lord Busuz</Text>
                </View>

                <TouchableOpacity style={styles.circularbuttonRight}>
                  <Feather name="eye" size={17} color="#fff" />
                  <Text style={{color:'#fff',fontWeight:'700',marginLeft:7}}>1958</Text>
                </TouchableOpacity>
            </View>



            <View style={styles.body}>
              <View style={{position:'absolute',bottom:-20,left:20}}>
                            <UserMessage pic={userpic} name="Patrick Lawrence" message="Lets Play anno 1701 Again! 👋"/>
                            <UserMessage pic={userpictwo} name="Savard Lawrence" message="Lets Play anno 1701 Again! 👋"/>
                            <UserMessage pic={userpicthree} name="Bhen ka Lauda" message="Aur lodon, kese ho! 👋"/>
              </View>
            </View>


            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.footer}>
         
                    <View style={[styles.mainbutton,styles.shadowProp]}>
                           <TextInput placeholderTextColor='rgba(255, 255, 255, 0.5)' 
                           style={{color:'#fff',fontSize:16,fontWeight:'700',paddingHorizontal:5}} 
                           placeholder='Type your comment...' />
                           <TouchableOpacity>
                           <FontAwesome name="send" size={21} color="#fff" />
                           </TouchableOpacity>
                      
                    </View>
                    <View style={styles.emojiWrapperRight}>
                    <TouchableOpacity style={styles.emoContainer}>
                                    <Text style={{fontSize:30}}>💌</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.emoContainer}>
                                    <Text style={{fontSize:25}}>♥️</Text>
                           </TouchableOpacity>
                           <TouchableOpacity style={styles.emoContainer}>
                                    <Text style={{fontSize:25}}>🎀</Text>
                           </TouchableOpacity>
                           <TouchableOpacity style={styles.emoContainer}>
                                    <Text style={{fontSize:25}}>👋</Text>
                           </TouchableOpacity>
                    </View>
            </KeyboardAvoidingView>


    </ImageBackground>
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
  liveperson:{
    width:45,
    height:45,
    borderRadius:100,
    marginLeft:20,
    borderColor:'#F96574',
    borderWidth:2
  },
  footer:{
    flex:1,
    paddingHorizontal:20,
    justifyContent:'center',
  },
  title:{
    fontSize:17,
    fontWeight:'600',
    color:'#fff'
  },
  circularbutton:{
    borderRadius:100,
    backgroundColor:'rgba(255, 255, 255, 0.1)',
    justifyContent:'center',
    alignItems:'center',
    height:40,
    width:40,
  },
  circularbuttonRight:{
    borderRadius:100,
    backgroundColor:'rgba(255, 255, 255, 0.1)',
    justifyContent:'center',
    alignItems:'center',
    height:35,
    paddingHorizontal:20,
    flexDirection:'row'
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
    backgroundColor:'rgba(255, 255, 255, 0.1)',
    borderRadius:23,
    alignItems:'center',
    height:65,
    width:'80%',
    flexDirection:'row',
    paddingHorizontal:20,
    justifyContent:'space-between',
  },
  shadowProp: {
    shadowColor: '#fff',
    shadowOffset: {width: -2, height: 15},
    shadowOpacity: 0.5,
    shadowRadius: 23,
  },
  emoContainer:{
    height:65,
    width:65,
    backgroundColor:'rgba(255, 255, 255, 0.1)',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15,
    marginBottom:15
  },
  emojiWrapperRight:{
    position:'absolute',
    zIndex:1111,
    right:15,
    bottom:15
  }
});
