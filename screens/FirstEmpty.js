import { View, TouchableOpacity, Text, Image } from "react-native";
import React from "react";
export default function FirstEmpty() {
  return (
    <View>
    <Image source={require('../images/Frame.png')} style={{ width: 250, height: 250,  marginLeft: 75, marginTop: 50 }} />
      
      <Text style={{color: 'white', fontSize: 18, marginLeft: 100, marginTop: 10 }}>
        Create a workout plan 
      </Text>
    <Text style={{color: 'white', fontSize: 18, marginLeft: 55,  }}>and help your client to transform.</Text>
    </View>
  );
}
