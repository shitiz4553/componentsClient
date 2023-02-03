
import React,{ useState } from 'react'
import { StyleSheet, Text ,View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function UpgradePremium() {



  return (
    <SafeAreaView style={styles.container}>
       
    <View style={styles.header}>
        <Text style={{opacity:1,marginVertical:15,color:'#fff',fontSize:22}}>Update to Premium</Text>
    </View>

    <View style={styles.body}>
     
     <TouchableOpacity style={styles.mainBtn}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Image style={{height:25,width:25}} source={{uri:'https://cdn-icons-png.flaticon.com/512/6941/6941697.png'}} />
          <Text style={{color:'#ffff',fontWeight:'bold',marginLeft:15,fontSize:15}}>HALF A MONTH</Text>
        </View>
        <Text style={{color:'#ffff',fontWeight:'bold',fontSize:22}}>$79.99</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.mainBtn}>
     <View style={{flexDirection:'row',alignItems:'center'}}>
          <Image style={{height:25,width:25}} source={{uri:'https://cdn-icons-png.flaticon.com/512/6941/6941697.png'}} />
          <Text style={{color:'#ffff',fontWeight:'bold',marginLeft:15,fontSize:15}}>HALF A YEAR</Text>
        </View>
        <Text style={{color:'#ffff',fontWeight:'bold',fontSize:22}}>$19.99</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.mainBtn}>
    <View style={{flexDirection:'row',alignItems:'center'}}>
          <Image style={{height:25,width:25}} source={{uri:'https://cdn-icons-png.flaticon.com/512/6941/6941697.png'}} />
          <Text style={{color:'#ffff',fontWeight:'bold',marginLeft:15,fontSize:15}}>FULL A YEAR</Text>
        </View>
        <Text style={{color:'#ffff',fontWeight:'bold',fontSize:22}}>$89.99</Text>
    </TouchableOpacity>

            <TouchableOpacity style={{marginTop:25,flexDirection:'row',alignItems:'center'}}>
                <Feather name="refresh-ccw" size={22} color='#BDAA92' />
              <Text style={{color:'#ffff',fontWeight:'455',marginLeft:15,fontSize:15,opacity:0.6,
            textDecorationLine:'underline'}}>Restore Purhcases</Text>
            </TouchableOpacity>

        <View style={{backgroundColor:'#242426',height:12,width:'200%',marginVertical:25 }} />

        <View style={{width:'100%'}}>
            <Text style={{opacity:0.8,marginVertical:15,color:'#fff',fontSize:17}}>VIP PRIVILEGES</Text>
            <TouchableOpacity style={{backgroundColor:'#242426',borderRadius:15,padding:20,flexDirection:'row',width:'100%'}}>
            <Image style={{height:65,width:100,resizeMode:'cover'}} source={{uri:'https://cdn-icons-png.flaticon.com/512/8777/8777970.png'}}  />
           <View style={{marginLeft:10}}>
           <Text style={{fontWeight:'bold',marginTop:15,color:'#fff',paddingBottom:5}}>Extra Free 8000 Coins</Text>
            <Text style={{fontWeight:'500',marginVertical:0,color:'#fff',opacity:0.5,fontSize:13}}>Get free 400 coins immedately {"\n"}20 coins  per day by check in</Text>
           </View>
            </TouchableOpacity>
        </View>

    </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232428',
  },
  image:{
    height:'100%',
    width:'100%',
  },
  body:{
    flex:3,
    paddingHorizontal:20,
    paddingTop:10,
    alignItems:'center',
    backgroundColor :'#343436',
    borderTopRightRadius:22,
    borderTopLeftRadius:22, 
    paddingHorizontal:20
  },
  footer:{
    flex:0.8,
    alignItems:'center',
    justifyContent:'center'
  },
  mainTitle:{
    fontSize:25,
    fontWeight:'bold'
  },
  termTitle:{
    fontWeight:'bold',
    fontSize:32,
    paddingVertical:17
  },
  header:{
    flex:1,
    backgroundColor:'#232428',
    padding:20,
    flexDirection:'row',
    justifyContent:'center',
  },
  mainBtn:{
    backgroundColor:'#706F6D',
    borderRadius:10,
    height:70,
    width:'100%',
    marginTop:25,
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:20,justifyContent:'space-between'
  },
  shadowProp: {
    shadowColor: '#FFB743',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.8,
    shadowRadius: 15,
  },
});
