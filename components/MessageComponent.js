import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View ,Image, FlatList} from 'react-native';
import { Entypo    } from '@expo/vector-icons';

//TODO : MAKE THE COMPONENT DYNAMIC ACCORDING TO THE NEEDS! PASS A FLATLIST !

//data for emoji
const DATA = [
    {
      id: '1',
      title: '😄',
    },
    {
      id: '2',
      title: '😁',
    },
    {
      id: '3',
      title: '😂',
    },
  ];
  

export default class MessageComponent extends Component {
    constructor(props) {
        super(props);
          this.state = {
            bgColor: [
              '#9B59B6',
              '#3498DB',
              '#F39C12',
              '#F1C40F',
              '#16A085',
            ],
            selectedColor: '',
            username:this.props.username,
            profilepic:this.props.profilepic,
            messageTime:this.props.messageTime,
            messageContent:this.props.messageContent,
            previousMessageName:'Bessie',
            previousMessage:'Hi guys, can you hear me?'
          };
        }
        componentDidMount() {
            this._getRandomColor()
          }
          _getRandomColor(){
            var item = this.state.bgColor[Math.floor(Math.random()*this.state.bgColor.length)];
            this.setState({
              selectedColor: item,
            })
          }

    render()
    {    
     return (
    
    <View style={styles.container}>
        
        <View>
   {/* AREA FOR THE PREVIOUS MESSAGE HIGHLTER IS HERE */}
            <View style={{marginLeft:60,marginBottom:10}}>
              <Text style={{color:'#fff',opacity:0.5,fontWeight:'600',fontSize:13}}>{this.state.previousMessageName}, : {this.state.previousMessage}</Text>
            </View>

            <View style={styles.profileHolderWrapper}>
                <Image style={styles.image} source={{uri:this.state.profilepic}} />
                <View style={styles.messageWrapper}>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={[styles.name, {color: this.state.selectedColor}]}>{this.state.username}</Text>
                                <Text style={styles.time}>{this.state.messageTime}</Text>
                                </View>
                                <TouchableOpacity>
                                 <Entypo name="dots-three-horizontal" size={18} color="#646569" />
                                </TouchableOpacity>
                        </View>

                    {/* Message body Starts Here */}

                    <View style={styles.messageBody}>
                        <Text style={styles.insideMessage}>{this.state.messageContent}</Text>
                    </View>
                    

                       {/* REACTIONS, OMMIT THEM WHEN REQUIRED.*/}

                    <FlatList
                    horizontal={true}
                        data={DATA}
                        renderItem={({item}) => 
                        <TouchableOpacity hitSlop={{top: 5, bottom: 5, left: 5, right: 5}} style={styles.emojiContainer}>
                            <Text style={{fontSize:12}}>{item.title}</Text>
                            <Text style={{color:'#fff',fontWeight:'600',marginLeft:2,fontSize:12}}>1</Text>
                        </TouchableOpacity>}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>

        </View>

    </View>
  );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1114',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileHolderWrapper :{
    width:'100%',
    flexDirection:'row',
  },
  image:{
    height:50,
    width:50,
    borderRadius:100,
    borderWidth:2,
    borderColor:'#272E31'
  },
  messageWrapper:{
    width:'80%',paddingHorizontal:10
  },
  name:{
    fontSize:16,
    fontWeight:'bold',
  },
  time:{
    color:'#646569',
    marginLeft:10,
    fontWeight:'bold',
    fontSize:12,
  },
  messageBody:{
    backgroundColor:'#2D303F',
    paddingVertical:15,
    paddingHorizontal:10,
    borderWidth:1,
    borderColor:'#404457',
    marginTop:10,
    borderTopRightRadius:15,
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15
  },
  insideMessage:{
    color:'#fff',
    fontWeight:'500',
    fontSize:15
  },
  emojiContainer:{
    paddingHorizontal:10,
    height:35,
    borderRadius:100,
    borderColor:'#404457',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#2D303F',
    marginTop:10,
    marginRight:10,
    flexDirection:'row',
    justifyContent:'center',
    borderWidth:1
  }
});
