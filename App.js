import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Pressable, ScrollView, TouchableOpacity, TextInput, FlatList, Button } from 'react-native';
import Screen from './Screens';
import { Icon } from 'react-native-elements'
import Screen2 from './Screens2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bottom from './components/Bottom';
//<Screen />
//<Screen2 /> 

const Stack = createNativeStackNavigator();

export default function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false, }}  name="Home" component={Bottom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: "#393E46", flex: 1, fontFamily: "Rambla"},
  
});
