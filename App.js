import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import Route from './Src/Routing/Route';
import Main from './Src/Pages/FrontPage';
import Img1 from './Src/Images/Img1.jpeg';

export default function App() {
  return (
  
    //  <Route/> 
    <Main/>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
