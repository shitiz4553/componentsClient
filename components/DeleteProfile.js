
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

export default function DeleteProfile() {
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
                      
            <Text style={[styles.modalText,{textAlign:'left'}]}>Delete Profile!</Text>

            <Text style={[styles.modalText,{fontSize:14,opacity:0.8,fontWeight:'300',textAlign:'left'}]}>
               Are you sure you want to delete The Cat's Name Profile?
            </Text>

            <View style={styles.greyBox}>
             <Image style={{height:61,width:61,resizeMode:'contain',marginRight:5,borderRadius:100}} source={{uri:'https://divedigital.id/wp-content/uploads/2022/07/2-Aesthetic-Cat-with-Sleepy-Mask.jpg'}} />
            <View>
            <Text style={{marginLeft:7,fontWeight:'bold',fontSize:20,paddingBottom:2}}>Cat's Name</Text>
            <Text style={{marginLeft:7,opacity:0.5}}>Blue russian Cat</Text>
            </View>
            </View>

            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonCloseCancel]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={[styles.textStyle,{color:'black'}]}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Delete Profile</Text>
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
    justifyContent:'flex-end',
    alignItems:'center',
    paddingBottom:'45%'
    
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
    justifyContent: 'flex-end',
    alignItems:'center'
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginBottom:25
  },
  button: {
    borderRadius: 7,
    padding: 17,
    marginTop:15,
  },
  buttonOpen: {
    backgroundColor: 'black',
  },
  buttonClose: {
    backgroundColor: '#FF0140',
  },
  buttonCloseCancel: {
    backgroundColor: 'white',
    borderWidth:1,
    borderColor:'#e5e5e5',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 10,
    fontSize:23,
    fontWeight:'700'
  },
  greyBox:{
    paddingHorizontal:10,
    paddingVertical:10,
    borderRadius:15,
    marginVertical:15,
    flexDirection:'row',
    width:'100%',
    paddingRight:25,
    alignItems:'center',

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
