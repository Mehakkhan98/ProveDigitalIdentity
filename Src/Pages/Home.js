
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View ,TextInput} from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
export default function App() {
  return (
    <View style={{marginTop:15}}>
            <View style={{flexDirection:'row',marginLeft:10,marginTop:10}}>
            <Ionicons name="md-contact" size={24} color="#004B87" />
            <Text style={{color:'#666666',marginLeft:10}}> John Doe</Text>
       
        </View>
        <View style = {styles.lineStyle} />
        <View style={{flexDirection:'row',marginLeft:10,marginTop:15}}>
        <EvilIcons name="calendar" size={24} color="#004B87" />
        <Text style={{color:'#666666',marginLeft:10}}>I hereby Identify myself at <Text style={styles.Text}>Prove Digital AB</Text></Text>
       
       
        </View>
        <View style = {styles.lineStyle} />
        <View style={{flexDirection:'row',marginLeft:10,marginTop:60,marginLeft:30}}>
       <TextInput
        style={{height: 60,width:60,borderRadius:30,fontSize:16,backgroundColor:'#EEEEEE',color:'#004B87',paddingLeft:20,marginRight:10,marginLeft:10,borderColor:'#004B87',borderWidth:1}}
        keyboardType={"number-pad"}
        secureTextEntry={true}
        minLength={1}
        maxLength={1}
        // onChangeText={text => setText(text)}
        // defaultValue={text}
      />
       <TextInput
        style={{height: 60,width:60,borderRadius:30,fontSize:16,backgroundColor:'#EEEEEE',color:'#004B87',paddingLeft:20,marginRight:10,marginLeft:10,borderColor:'#004B87',borderWidth:1}}
        keyboardType={"number-pad"}
        secureTextEntry={true}
        minLength={1}
        maxLength={1}
        // onChangeText={text => setText(text)}
        // defaultValue={text}
      />
       <TextInput
        style={{height: 60,width:60,borderRadius:30,fontSize:16,backgroundColor:'#EEEEEE',color:'#004B87',paddingLeft:20,marginRight:10,marginLeft:10,borderColor:'#004B87',borderWidth:1}}
        keyboardType={"number-pad"}
        secureTextEntry={true}
        minLength={1}
        maxLength={1}
        // onChangeText={text => setText(text)}
        // defaultValue={text}
      />
       <TextInput
        style={{height: 60,width:60,borderRadius:30,fontSize:16,backgroundColor:'#EEEEEE',color:'#004B87',paddingLeft:20,marginRight:10,marginLeft:10,borderColor:'#004B87',borderWidth:1}}
        keyboardType={"number-pad"}
        secureTextEntry={true}
        minLength={1}
        maxLength={1}
        // onChangeText={text => setText(text)}
        // defaultValue={text}
      />
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
      Text:{
        color:'#004B87',
        marginTop:10,
        fontSize:18,
        marginLeft:10,
        fontWeight:'bold'

    },
    lineStyle:{
      borderWidth: 0.5,
      borderColor:'gray',
      margin:10,
  }
});
