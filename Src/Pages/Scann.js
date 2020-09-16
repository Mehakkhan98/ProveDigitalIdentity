
import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Scan from '../Images/S1.jpeg';
export default function App() {
  return (
    <View style={styles.container}>
        <Image source={Scan} alt="img" style={{ width: 200, height: 200 ,borderRadius:5}}/>
    <Text style={{marginTop:10,fontSize:16,color:'#004B87',fontWeight:'bold'}}>Scan a QR code to Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
