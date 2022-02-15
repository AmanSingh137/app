import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default function About({ navigation }) {
  const [trainer, setTrainer] = useState(0);
  const [student, setStudent] = useState(0);
  const [selected, setSelected] = useState(false)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tell us about you</Text>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
          width: 360,
          marginLeft: 24,
          marginTop: 10,
        }}
      />
      <Text style={{ color: "white", fontSize: 18, marginLeft: 22, marginTop: 10 }}>This is how trainer and sporty will get to know you</Text>
      <View style={{ flexDirection: "row", marginLeft: 6 }}>
        <TouchableOpacity style={{ width: 150, height: 260, backgroundColor: trainer===1?"#00ADB566": 'grey', marginLeft: 20,
        marginTop: 50, borderRadius: 25 }} onPress={()=>{
          setStudent(0)
          setTrainer(1)
          setSelected(true)
        }}>
          <Image source={require('./images/image1.jpg')} style={{ height: 210, width: 142, marginLeft: 4, marginTop: 5, borderRadius: 25 }} />
          <Text style={{color: "white", fontSize: 20, marginLeft: 35, marginTop: 10}}>Trainer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 150, height: 260, backgroundColor: student===1?"#00ADB566": 'grey', marginLeft: 60, 
        marginTop: 50, borderRadius: 25 }} onPress={()=>{
          setStudent(1)
          setTrainer(0)
          setSelected(true)
        }}>
          <Image source={require('./images/image4.jpg')} style={{ height: 210, width: 142, marginLeft: 4, marginTop: 5, borderRadius: 25 }} />
          <Text style={{color: "white", fontSize: 20, marginLeft: 35, marginTop: 10}}>Student</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
          style={{
            backgroundColor: "#00ADB566",
            width: 300,
            height: 40,
            marginLeft: 60,
            alignContent: "center",
            justifyContent: "center",
            borderRadius: 30,
            shadowColor: "black",
            elevation: 8,
            marginTop: 250,
            marginBottom: 10
          }}
          onPress={()=>{
            navigation.navigate('UserDetails')
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
              alignSelf: 'center',
              textShadowColor: "#000",
              textShadowOffset: { width: 1, height: 1 },
              textShadowRadius: 1,
            }}
          >
            {selected===false ? "Select":"Next"}
          </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#393E46", flex: 1, },
  text: { color: 'white', fontSize: 28, marginTop: 50, marginLeft: 20, fontWeight: "bold" }
});
