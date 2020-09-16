
import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Img2 from '../Images/Img2.jpeg';
export default function App() {
  return (
    <View style={styles.container}>
       
       <Image source={Img2} alt="img" style={{ width: 130, height: 60 ,borderRadius:5}}/>
       <Text style={{marginTop:10,fontSize:18,fontWeight:'bold',color:'#FFFFFF'}}>Digital Identity</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004B87',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text:{
      color:'#004B87',
      marginTop:10,
      fontSize:20,
      marginLeft:10
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'gray',
    margin:10,
}
});
