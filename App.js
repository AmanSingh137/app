import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Pressable, ScrollView, TouchableOpacity, TextInput, FlatList, Button } from 'react-native';
import Screen from './Screens';
import { Icon } from 'react-native-elements'
import Screen2 from './Screens2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
//<Screen />
//<Screen2 /> 


export default function App() {
 
  return (
    <Screen />
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: "#393E46", flex: 1, fontFamily: "Rambla"},
  
});
