
import React,{ useState } from 'react'
import { StyleSheet, Text, Image ,View, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons ,MaterialCommunityIcons } from '@expo/vector-icons';
import MultiSlider from '@ptomasroos/react-native-multi-slider';


export default function ShareArticle() {

    const [enableScroll,setenableScroll] = useState(false)
    const [disableScroll,setdisableScroll] = useState(null)
    const [minVal] = useState(0)
    const [maxVal] = useState(30)


  return (
    <SafeAreaView style={styles.container}>
       

    <View style={styles.body}>
       <View style={{marginBottom:50}}>
       <Text style={{fontSize:25,marginBottom:25}}>Distance</Text>
        <Text style={{fontSize:16}}>Display all coupons within the red radius</Text>
       </View>
        <View style={{paddingBottom:20}}>
        <MultiSlider
        enableLabel
        onValuesChangeStart={()=>setdisableScroll(false)}
        onValuesChangeFinish={()=>setenableScroll(true)}
        trackStyle={{height:4}}
        selectedStyle={{backgroundColor:'#35B4F9'}}
        min={minVal}
        max={maxVal}
      />
      <Text style={styles.minstyle}>{minVal}</Text>
      <Text style={styles.maxstyle}>{maxVal}</Text>
        </View>
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
  text:{
    marginTop:15,
    fontStyle:'italic'
  },
  subtitle:{
    opacity:0.6,
    marginVertical:15
  },
  termTitle:{
    fontWeight:'bold',
    fontSize:16,
    paddingVertical:17
  },
minstyle:{
    position:'absolute',
    zIndex:1111,
    left:0,
    bottom:0,
    opacity:0.5
},
maxstyle:{
    position:'absolute',
    zIndex:1111,
    right:0,
    bottom:0,
    opacity:0.5
},
});
