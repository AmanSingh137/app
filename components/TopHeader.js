import { View, TouchableOpacity } from "react-native";
import React from "react";
export default function TopHeader({navigation}) {
  return (
    <TouchableOpacity onPress={()=>{
      navigation.navigate('About');
    }}>
      <View
        style={{
          borderBottomColor: "white",
          borderBottomWidth: 4,
          marginTop: 50,
          width: 40,
          marginLeft: 350,
        }}
      />
      <View
        style={{
          borderBottomColor: "white",
          borderBottomWidth: 4,
          marginTop: 5,
          width: 40,
          marginLeft: 350,
        }}
      />
      <View
        style={{
          borderBottomColor: "white",
          borderBottomWidth: 4,
          marginTop: 5,
          width: 20,
          marginLeft: 350,
        }}
      />
    </TouchableOpacity>
  );
}
