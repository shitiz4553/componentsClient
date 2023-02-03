
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

export default function Slider() {
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
            <Text style={styles.modalText}>Share this Article</Text>
            <View style={styles.greyBox}>
            <MaterialCommunityIcons name="file-check" size={36} color="#2253D3" />
            <Text style={{marginLeft:5}}>
                Democrats Move Ahead on Stimulus as Biden Shows Oppenness To Channel...
            </Text>
            </View>

            <Text style={[styles.modalText,{fontSize:17}]}>Add To</Text>

            <FlatList
            horizontal={true}
            data={data}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => onPress(item)}>
                <View style={[styles.itemContainer, selected.includes(item.id) ? styles.selected : null]}>
                    <MaterialIcons name={item.iconName} size={23} color={selected.includes(item.id) == true ? '#2253D3' : 'black' }/>
                    <Text>{item.title}</Text>
                </View>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
            />

            <Text style={[styles.modalText,{fontSize:17}]}>Share With Friends</Text>

            <FlatList
            horizontal={true}
            data={data}
            renderItem={({ item }) => (
                <TouchableOpacity style={{justifyContent:'center',alignItems:'center',marginRight:20}}>
                 <Image style={{height:61,width:61,borderRadius:100,marginBottom:5}} source={{uri:item.userImage}}/>
                 <Text>{item.title}</Text>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
            />

            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Share This Article</Text>
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
    justifyContent: 'flex-end',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#e5e5e5',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
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
    backgroundColor: '#2253D3',
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
    backgroundColor:'#eeeeee',
    borderWidth:1,
    borderColor:'#e5e5e5',
    paddingHorizontal:10,
    paddingVertical:10,
    borderRadius:5,
    marginBottom:15,
    flexDirection:'row',
    width:'100%',
    paddingRight:25
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
