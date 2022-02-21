import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ClientScreen from "./ClientScreen";
import Favorites from "./Favorites";
import Profile from "./Profile";
import { Image } from "react-native";
import Screen from '../Screens'
import { TouchableOpacity } from "react-native";

const Tab = createBottomTabNavigator();

export default function Bottom() {
  return (
      <Tab.Navigator screenOptions={
        {
          tabBarActiveTintColor: '#fff',
          tabBarStyle: {backgroundColor: "#393E36", borderTopWidth: 0, elevation: 0,}
        }}  >
        {/*#1d2229 */}
        <Tab.Screen name="Home" component={Screen} options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../ImportedIcons/home.png')} style={{ tintColor: color, }} />
          ),
          tabBarButton: (props) => { return <TouchableOpacity {...props} /> },
          headerShown: false, headerTintColor: "white"
        }} />
        <Tab.Screen name="Client" component={ClientScreen} options={{
          tabBarLabel: 'Client',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../ImportedIcons/client2.png')} style={{ tintColor: color }} />
          ),
          tabBarButton: (props) => { return <TouchableOpacity {...props} /> }, 
          headerShown: false
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