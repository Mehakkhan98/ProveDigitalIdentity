
import React from 'react';
import { StyleSheet,TouchableOpacity, Text, View,Image,StatusBar } from 'react-native';
import Img1 from '../Images/Img1.jpeg';
import { Feather } from '@expo/vector-icons'; 

import { AntDesign } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
import BarCode from '../Components/BarCodeScanner';
export default function App() {
   
  const   onPress=()=>{
    Actions.Home()
    }
    const About=()=>{
        Actions.FAQ()
    }
    const Settings=()=>{
        Actions.Setting()
    }
    const Scan=()=>{
        Actions.Scanner()
    }
        return (
            <View style={styles.container}>
               <StatusBar backgroundColor='red' barStyle='dark-content' />
                 <TouchableOpacity
               style={{ right:10, top:13, position:'absolute'}}
                onPress={About}><Feather name="help-circle" size={24} color="black" />
              </TouchableOpacity>
                   

                <TouchableOpacity style={{ left:10, top:12, position:'absolute'}} 
                  onPress={Settings}><Feather name="settings" size={24} color="black" />
               </TouchableOpacity>  
                <Image source={Img1} alt="img" style={{ width: 130, height: 70 ,borderRadius:5}}/>
              <Text style={styles.text}>The Global</Text>
              <Text style={styles.text}>Digital Identity Solution</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={onPress}
              >
                <Text style={{ color:'#FFFFFF'}}>Begin Login</Text>
              </TouchableOpacity>
              <View style={{position:'absolute',bottom:25,alignItems:'center'}}>
                  <TouchableOpacity onPress={Scan}>
                  <AntDesign name="scan1" size={24} color="black" />
                  </TouchableOpacity>
             <Text>Scan Qr Code</Text>
              </View>
             
            </View>
          );
    }
 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    fontSize:20,
    justifyContent: 'center',
  },
  text:{
           color:'#222222',
           fontSize:20,
  },
  button:{
 marginTop:10,
 height:50,
 width:120,
 fontSize:20,
padding:15,
alignItems:'center',
 backgroundColor:'#004B87',
 borderRadius:10
  }
});
