import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons,MaterialCommunityIcons,FontAwesome   } from '@expo/vector-icons';

export default function CustomTextInputBox() {
  return (
    <View style={styles.container}>
      <View style={[styles.outerContainer, styles.shadowProp]}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
            <TouchableOpacity>
            <Ionicons name="attach-outline" size={27} color="black" />
            </TouchableOpacity>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Enter Text Here" />
                <TouchableOpacity>
                   <MaterialCommunityIcons name="sticker-circle-outline" size={18} color="#BABBBB" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
            <FontAwesome name="send" size={18} color="#F2BA76" />
            </TouchableOpacity>
            </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5D5E7',
    alignItems: 'center',
    justifyContent: 'center',
  },
    outerContainer:{
        width:'90%',
        height:70,
        borderRadius:25,
        borderWidth:5,
        borderColor:'#F4D4E2',
        backgroundColor:'#fff',
        justifyContent:'center',
        paddingHorizontal:10
    },
    shadowProp: {
        shadowColor: '#ba6e90',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 7,
      },
      inputContainer:{
        backgroundColor :'#F7F7F7',
        width:'75%',
        paddingVertical:10,
        borderRadius:50,
        paddingHorizontal:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginRight:5
      },
      input:{
        backgroundColor :'#F7F7F7',
        width:'100%',
        
      }
});
