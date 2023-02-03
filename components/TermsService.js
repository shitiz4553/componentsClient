
import { StyleSheet, Text, Image ,View, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons ,MaterialCommunityIcons } from '@expo/vector-icons';

export default function TermsService() {
  return (
    <SafeAreaView style={styles.container}>
       

    <View style={styles.body}>
        <Text style={styles.mainTitle}>Terms of Service</Text>
        <Text style={styles.subtitle}>Last updated October 30th 2021</Text>
        <Text style={styles.termTitle}>1. Lorem Ipseum</Text>
        <Text style={styles.paragraph}>Lorem Ipsum is simply dummy text 
        of the printing and typesetting industry. Lorem Ipsum has been 
        the industry's standard dummy text ever since the 1500s, when an 
        unknown printer took a galley of type and scrambled it to make a 
        type specimen book. It has survived not only five centuries, but 
        also the leap into electronic typesetting, remaining essentially 
        unchanged. It was popularised in the 1960s with the release of 
        Letraset sheets containing Lorem Ipsum passages, and more recently 
        with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum</Text>
        <Text style={styles.termTitle}>2. Lorem Ipseum</Text>
        <Text style={styles.paragraph}>Lorem Ipsum is simply dummy text 
        of the printing and typesetting industry. Lorem Ipsum has been 
        the industry's standard dummy text ever since the 1500s, when an 
        unknown printer took a galley of type and scrambled it to make a 
        type specimen book. It has survived not only five centuries, but 
        also the leap into electronic typesetting, remaining essentially 
        unchanged. It was popularised in the 1960s with the release of 
        Letraset sheets containing Lorem Ipsum passages, and more recently 
        with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum</Text>
    </View>


    <View style={styles.footer}>

    <TouchableOpacity style={styles.decline}>
       <Ionicons name="close" size={21} color="#574BDB" />
       <Text style={{color:'#574BDB',fontWeight:'bold',marginLeft:5}}>Reject</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.accept}>
     <MaterialCommunityIcons name="arrow-right-bottom" size={24} color="white" />
       <Text style={{color:'#ffff',fontWeight:'bold',marginLeft:5}}>Accept</Text>
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
  cornerContainer:{
    flex:1,
    flexDirection:'row'
  },
  body:{
    flex:6,
    paddingHorizontal:20,
    paddingTop:15
    
  },
  footer:{
    flex:0.8,
    alignItems:'center',
    justifyContent:'space-evenly',
    flexDirection:'row',
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
  paragraph:{
    lineHeight:20,
  },
  decline:{
    width:'45%',
    height:55,
    borderRadius:5,
    borderWidth:1,
    borderColor:'#574BDB',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
  },
  accept:{
    backgroundColor:'#574BDB',
    width:'45%',
    height:55,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
  }
});
