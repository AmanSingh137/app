import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from './HomeScreen';
import ClientScreen from "./ClientScreen";
import Favorites from "./Favorites";
import Profile from "./Profile";
import { View, Image, Text, ImageBackground } from "react-native";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";
//import RadialGradient from 'react-native-radial-gradient';

const Tab = createBottomTabNavigator();

export default function Bottom() {
  return (
    // <View style={{ marginTop: 130 }}>
    //   <ImageBackground source={require('../ImportedIcons/down.png')} style={{ width: 420, height: 90, marginBottom: -50 }} />
      <Tab.Navigator sceneContainerStyle={{ display:"none", backgroundColor: "white" }} screenOptions={
        {
          tabBarStyle: [
            {
              backgroundColor: 'radial-gradient(65.56% 48.76% at 50% 47.11%, #393E46 0%, rgba(57, 62, 70, 0) 100%)',
              elevation: 2
            },
          ],
          tabBarActiveTintColor: 'white',
          headerStyle: [
            {
              display: 'none'
            }
          ]
        }} >
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../ImportedIcons/home.png')} style={{ tintColor: color, }} />
          ),
          tabBarButton: (props) => { return <TouchableOpacity {...props} /> },
          
        }} />
        <Tab.Screen name="Client" component={ClientScreen} options={{
          tabBarLabel: 'Client',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../ImportedIcons/client2.png')} style={{ tintColor: color }} />
          ),
          tabBarButton: (props) => { return <TouchableOpacity {...props} /> }
        }} />
        <Tab.Screen name="Favorites" component={Favorites} options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../ImportedIcons/Favorite.png')} style={{ tintColor: color }} />
          ),
          tabBarButton: (props) => { return <TouchableOpacity {...props} /> }
        }} />
        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../ImportedIcons/profile.png')} style={{ tintColor: color }} />
          ),
          tabBarButton: (props) => { return <TouchableOpacity {...props} /> }
        }} />
      </Tab.Navigator>
    // </View>
  );
}