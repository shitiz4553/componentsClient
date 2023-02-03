
import React,{ useState } from 'react'
import { StyleSheet, Text, FlatList ,View, Image, TouchableOpacity,Modal,Pressable } from 'react-native';
import { Ionicons ,MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';

const data = 
[
    { id: 1, title: 'Item 1',iconName:'playlist-add' , userImage:'https://randomuser.me/api/portraits/men/13.jpg'}, 
    { id: 2, title: 'Item 2' ,iconName:'favorite-outline', userImage:'https://randomuser.me/api/portraits/men/3.jpg'}, 
    { id: 3, title: 'Item 3',iconName:'add', userImage:'https://randomuser.me/api/portraits/men/23.jpg'},
    { id: 4, title: 'Item 3',iconName:'airplanemode-active', userImage:'https://randomuser.me/api/portraits/men/41.jpg'},
    { id: 5, title: 'Item 3',iconName:'audiotrack', userImage:'https://randomuser.me/api/portraits/men/24.jpg'},
];

export default function CongratsModal() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState([]); 
  

  const onPress = (item) => {
    const index = selected.indexOf(item.id);
    if (index > -1) {
      setSelected([...selected.slice(0, index), ...selected.slice(index + 1)]);
    } else {
      setSelected([...selected, item.id]);
    }
  };
  
  return (
    <View style={[styles.container,{backgroundColor:'#FAFAFA'}]}>
       

    <View style={[styles.body,
    {backgroundColor:modalVisible == true ? 'black' : null, 
    opacity:modalVisible == true ? 0.7 : 1,
}]}>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          
        <View style={{width:'100%',alignItems:'center',paddingVertical:15}}>
        <Image style={{height:122,width:122,resizeMode:'contain',marginTop:15,marginBottom:15}} source={require('../assets/congo.png')} />
        </View>
            
            <Text style={[styles.modalText,{textAlign:'center'}]}>Congratulations!</Text>

            <Text style={[styles.modalText,{fontSize:14,opacity:0.7,fontWeight:'300',textAlign:'center'}]}>
                Your Level has up to Level 3! Continue your hobbby to reach a higher level.
            </Text>

            <View style={styles.greyBox}>
             <Image style={{height:61,width:61,resizeMode:'contain',marginRight:15}} source={require('../assets/cup.png')} />
            <View>
            <Text style={{marginLeft:5,fontWeight:'bold',fontSize:16}}>Achievment Unlocked</Text>
            <Text style={{marginLeft:5,opacity:0.5}}>Skateboard Experts</Text>
            </View>
            </View>

            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Congo!</Text>
      </TouchableOpacity>

    </View>




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image:{
    height:'100%',
    width:'100%',
  },
  body:{
    flex:1,
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
centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width:350,
  },
  button: {
    borderRadius: 7,
    padding: 17,
    marginTop:20
  },
  buttonOpen: {
    backgroundColor: '#2253D3',
  },
  buttonClose: {
    backgroundColor: '#FE913F',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    fontSize:23,
    fontWeight:'700'
  },
  greyBox:{
    backgroundColor:'#EEF9FB',
    paddingHorizontal:10,
    paddingVertical:10,
    borderRadius:15,
    marginVertical:15,
    flexDirection:'row',
    width:'100%',
    paddingRight:25,
    alignItems:'center',
    justifyContent:'center',

  },
  itemContainer: {
    paddingVertical: 17,
    borderWidth: 2,
    borderColor: '#EBEBEB',
    backgroundColor: '#FAFAFA',
    borderRadius:15,
    marginBottom:25,
    marginRight:10,
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:25
  },
  selected: {
    backgroundColor: '#EFF6FE',
    borderColor: '#2253D3',

  },
});
