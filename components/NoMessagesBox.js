import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';

export default function CustomTextInputBox() {
  return (
    <View style={styles.container}>
        <View style={[styles.box, styles.shadowProp]}>
            <Text style={styles.title}>No Messages yet...</Text>
            <Text style={styles.passage}>Send a message or reply with a greeting sticker below!</Text>
            <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/501/501127.png'}}
            style={{height:70,width:70,resizeMode:'contain',marginTop:10}}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
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
    fontWeight:'bold',
    fontSize:22,
    textAlign:'center',
  },
  passage:{
    textAlign:'center',
    opacity:0.6,
    lineHeight:20,
    fontSize:16,
    marginTop:10
  }
});
