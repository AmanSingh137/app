import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Pressable, ScrollView, TouchableOpacity, TextInput, FlatList, Button } from 'react-native';
import Screen from './Screens';
import { Icon } from 'react-native-elements'
import Screen2 from './Screens2';

// <Screen2 />
//<Screen />

let DATA = [{
  id: 1,
  text: "M"
},
{
  id: 2,
  text: "T"
},
{
  id: 3,
  text: "W"
},
{
  id: 4,
  text: "T"
},
{
  id: 5,
  text: "F"
}, {
  id: 6,
  text: "S"
},
{
  id: 7,
  text: "S"
}
]

export default function Screen3({navigation, route}) {
  const { id, text, title, image } = route.params;
  const [newText, setNewText] = useState(text)
  const [des, setDes] = useState(text);
  const [count, setCount] = useState(WordCount(text));

  function WordCount(str) {
    const data = str.split(" ")
    let n = data.length, c=0
    for(let i =0; i < n; i++)
    {
      if(data[i]==="") continue;
      else c++;
    }
    return c;
  }
  const handleChange = (query) => {
    setNewText(query)
    let n = query.length
      setDes(query)
      let c = WordCount(query)
      setCount(c)
  }

  const renderItem = ({ item }) => (
    <Text style={{ marginLeft: 5, color: "white", marginTop: 5 }}>{item.text}</Text>
  );
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={()=>{
          navigation.goBack();
        }}>
          <Text style={{ fontSize: 30, color: "white", fontWeight: "bold", marginTop: 30, marginLeft: 20 }}>&lt;</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 20, color: "white", flexDirection: "row", marginTop: 38, marginLeft: 65, fontFamily: 'Rambla_400Regular' }}>
          Create workout class</Text>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('WorkoutSelection');
        }}>
          <Text style={{ fontSize: 18, color: "white", flexDirection: "row", marginTop: 39, marginLeft: 40, fontFamily: 'Rambla_400Regular' }}>
            Skip</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ color: "grey", fontSize: 15, marginLeft: 20 }}>Plan name</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="grey"
        value={title}
      />

      <View style={{ backgroundColor: "rgba(255, 255, 255, 0.4)", width: 120, height: 120, marginLeft: 280, marginTop: -50, borderRadius: 25 }}>
        <TouchableOpacity>
          <Icon name="add" color="white" size={40} style={{ marginTop: 30 }} />
        </TouchableOpacity>
      </View>
     
      <Text style={{ color: "grey", marginLeft: 20 }} >Description</Text>
      <View style={{elevation: 2, color: "white", backgroundColor: "grey",borderRadius: 20, marginHorizontal: 20}}>
        <TextInput style={{
          color: "white", padding: 15, textAlignVertical: "top",
        }} multiline value={newText}
          numberOfLines={6} onChangeText={handleChange} />
      </View>

      <Text style={{ color: "white", marginLeft: 20 }}>{count}/50</Text>
      <TouchableOpacity style={styles.buttonStyling}>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 15,
            marginLeft: 30,
            textShadowColor: "#000",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 1,
          }}
        >
          Save
        </Text>
      </TouchableOpacity>
      <View>
        <Text style={{ color: "white", fontSize: 25, marginLeft: 20 }}>Create workout class</Text>
      </View>
      <ScrollView>
        {}
      </ScrollView>
      <TouchableOpacity style={{
        backgroundColor: "#00ADB5ff", width: 380, height: 40, marginLeft: 20, alignContent: "center", justifyContent: "center",
        borderRadius: 30, shadowColor: "black", elevation: 100, marginBottom: 10, marginTop: 750, position: "absolute", opacity: 1
      }} onPress={()=>{
          navigation.navigate('WorkoutSelection');
        }}>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
            marginLeft: 130,
            textShadowColor: "#000",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 1,
          }}
        >
          Add Exercise
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#393E46', flex: 1 },
  input: {
    backgroundColor: "#393E46", width: 220, marginHorizontal: 20, height: 40, shadowColor: "#000", shadowOpacity: 0.8,
    color: "white", fontWeight: "bold", fontSize: 20
  },
  buttonStyling: {
    backgroundColor: "#00ADB566", width: 100, height: 40, marginLeft: 300, alignContent: "center", justifyContent: "center",
    borderRadius: 30, shadowColor: "black", elevation: 8, marginBottom: 10, marginTop: 10
  },
});
