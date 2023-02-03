
import React,{ useState } from 'react'
import { StyleSheet, Text ,View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';


export default function Login() {

    const [enableScroll,setenableScroll] = useState(false)
    const [disableScroll,setdisableScroll] = useState(null)
    const [minVal] = useState(0)
    const [maxVal] = useState(30)


  return (
    <SafeAreaView style={styles.container}>
       

    <View style={styles.body}>
     
    <View>
        <Text style={styles.termTitle}>Welcome Back</Text>
        <Text>We happy to see you here again. Enter your email address and password</Text>
    </View>

        <View style={styles.inputwrapper}>
            <TextInput placeholder='Email' style={{width:'100%',height:'100%',paddingHorizontal:20}}/>
        </View>
        <View style={styles.inputwrapper}>
        <TextInput placeholder='Password' style={{width:'100%',height:'100%',paddingHorizontal:20}}/>
            </View>

            <TouchableOpacity style={styles.mainbtn}>
            <Text style={{fontWeight:'bold',fontSize:16}}>Login</Text>
            </TouchableOpacity>

          <TouchableOpacity style={{marginTop:20}}>
          <Text style={{fontWeight:'bold',fontSize:14}}>Forgot Password</Text>
          </TouchableOpacity>



          <TouchableOpacity style={styles.blackbtn}>
            <Text style={{fontWeight:'bold',fontSize:16,color:'#fff'}}>Create An Account</Text>
            </TouchableOpacity>
    </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  image:{
    height:'100%',
    width:'100%',
  },
  body:{
    flex:1,
    paddingHorizontal:20,
    paddingTop:15,
    justifyContent:'center',
    alignItems:'center'
    
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
  inputwrapper:{
    borderWidth:1,
    borderRadius:10,
    borderColor:'#e5e5e5',
    width:'100%',
    height:57,
    marginTop:20
  },
  mainbtn:{
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:'#DDF235',
    height:65,
    width:'100%',
    marginTop:25
  },
  blackbtn:{
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:'black',
    height:65,
    width:'100%',
    marginTop:25
  }
});
