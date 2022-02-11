import React from 'react';
import { StyleSheet } from 'react-native';
import Screen2 from './Screens2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bottom from './components/Bottom';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const Stack = createNativeStackNavigator();

export default function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false, }}  name="Home" component={Bottom} />
        <Stack.Screen options={{headerShown: false, }}  name="WorkoutDetail" component={Screen3} />
        <Stack.Screen options={{headerShown: false, }}  name="WorkoutSelection" component={Screen2} />
        <Stack.Screen options={{headerShown: false, }}  name="FinalWorkout" component={Screen4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: "#393E46", flex: 1, fontFamily: "Rambla"},
  
});
