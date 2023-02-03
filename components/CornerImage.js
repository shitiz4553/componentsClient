
import { StyleSheet, Text, Image ,View, SafeAreaView } from 'react-native';

const art = "https://static.vecteezy.com/system/resources/previews/005/127/846/non_2x/fashion-portrait-of-beautiful-woman-in-green-suit-using-cellphone-on-yellow-background-free-photo.jpg"

export default function CornerImage() {
  return (
    <View style={styles.container}>
       
    <View style={styles.cornerContainer}>
        <View style={{flex:1,paddingHorizontal:20}}>
        {/* EMPTY AREA */} 
        <SafeAreaView>
          <Text style={styles.mainTitle}>Mathew Lee</Text>
          <Text>@mattleeway</Text>
          <Text style={styles.text}>There is no goal, only a way!</Text>
        </SafeAreaView>
        </View>
        <View style={styles.imageWrapper}>
        <Image source={{uri:art}} style={styles.image}/>
        </View>
    </View>



    <View style={styles.body}>

    </View>

    </View>
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
    flex:2.5,
  },
  imageWrapper:{
    backgroundColor:'blue',
    flex:1,
    borderBottomLeftRadius:100,
    overflow:'hidden'
  },
  mainTitle:{
    fontSize:22,
    fontWeight:'700'
  },
  text:{
    marginTop:15,
    fontStyle:'italic'
  }

});
