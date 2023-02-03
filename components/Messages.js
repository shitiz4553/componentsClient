
import { StyleSheet, Text ,View, SafeAreaView, Image, TextInput,FlatList } from 'react-native';
import { Ionicons ,MaterialCommunityIcons } from '@expo/vector-icons';

const MessageCard = ({online,name,message,userimg,time})=> {
    return(
        <View style={{width:'100%',marginBottom:30}}>
           <View style={{flexDirection:'row'}}>
           <View>
                <Image style={{height:60,width:60,borderRadius:65,marginRight:15}} source={{uri:userimg}} />
                <View style={{
                    borderWidth:4,borderColor:'#fff',
                    backgroundColor: online ==="online" ? '#27B10E' :  online ==="busy" ? '#DCB727' : online ==="dnd" ? '#E01E00' : '#BAC1C6',
                    position:'absolute',zIndex:1111,bottom:0,right:15,
                    height:21,width:21,borderRadius:50
            }}>

                </View>
            </View>
            <View>
              <Text style={{fontSize:16,fontWeight:'bold'}}>{name}</Text>
              <Text style={{marginTop:8,fontWeight:'700',fontSize:14,marginLeft:2,opacity:0.5}}>{message}</Text>
            
            </View>
            <View style={{flexDirection:'row',alignItems:'center',position:'absolute',right:5,zIndex:1111,top:2}}>
             <MaterialCommunityIcons name="read" size={17} color="black" />
              <Text style={{marginLeft:13}}>{time}</Text>
             </View>
           </View>
         
        </View>
    )
}

const DATA = [
    {
      id: '1',
      userimg: 'https://randomuser.me/api/portraits/men/70.jpg',
      name:'John Smith',
      time:'12:12',
      online:'dnd',
      message:'Hey man you suck how are you!'
    },
    {
        id: '2',
        userimg: 'https://randomuser.me/api/portraits/men/12.jpg',
        name:'John Smith',
        time:'12:12',
        online:'busy',
        message:'Hey man you suck how are you!'
      },
      {
        id: '3',
        userimg: 'https://randomuser.me/api/portraits/men/11.jpg',
        name:'John Smith',
        time:'12:12',
        online:'dnd',
        message:'Hey man you suck how are you!'
      },
      {
        id: '4',
        userimg: 'https://randomuser.me/api/portraits/men/13.jpg',
        name:'John Smith',
        time:'12:12',
        online:'online',
        message:'Hey man you suck how are you!'
      },
      {
        id: '5',
        userimg: 'https://randomuser.me/api/portraits/men/70.jpg',
        name:'John Smith',
        time:'12:12',
        online:'dnd',
        message:'Hey man you suck how are you!'
      },
      {
          id: '25',
          userimg: 'https://randomuser.me/api/portraits/men/12.jpg',
          name:'John Smith',
          time:'12:12',
          online:'busy',
          message:'Hey man you suck how are you!'
        },
        {
          id: '12',
          userimg: 'https://randomuser.me/api/portraits/men/11.jpg',
          name:'John Smith',
          time:'12:12',
          online:'dnd',
          message:'Hey man you suck how are you!'
        },
        {
          id: '312',
          userimg: 'https://randomuser.me/api/portraits/men/13.jpg',
          name:'John Smith',
          time:'12:12',
          online:'online',
          message:'Hey man you suck how are you!'
        },
  ];

export default function Messages() {
  return (
    <SafeAreaView style={styles.container}>
       

       <View style={styles.header}>
            <View style={styles.searchcontainer}>
                <Ionicons style={{marginRight:10}} name="search" size={24} color={'grey'} />
                <TextInput placeholderTextColor={'grey'} placeholder='Search for Chats & Messages' />
            </View>
      </View>

    <View style={styles.body}>
    <FlatList
        data={DATA}
        renderItem={({item}) => <MessageCard message={item.message} name={item.name} online={item.online} userimg={item.userimg} time={item.time} />}
        keyExtractor={item => item.id}
      />
    </View>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
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
    paddingTop:15,
    
  },
  header:{
    flex:1,
    justifyContent:'center',
    paddingHorizontal:20
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
  searchcontainer:{
    backgroundColor:'#f8f8f8',
    borderRadius:5,
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:15,
    height:55,
    borderRadius:15,
    width:'100%'
  }
});
