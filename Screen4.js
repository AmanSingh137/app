import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Icon } from 'react-native-elements'

const days = [
  {
    id: 1,
    day: "M"
  },
  {
    id: 2,
    day: "T"
  },
  {
    id: 3,
    day: "W"
  },
  {
    id: 4,
    day: "T"
  },
  {
    id: 5,
    day: "F"
  },
  {
    id: 6,
    day: "S"
  },
  {
    id: 7,
    day: "S"
  },
]

export default function Screen4({ navigation, route }) {
  const [data, setData] = useState(route.params)
  const [day, setDay] = useState(data.map(()=> {return []}))
  const renderItem = ({ item, index }) => {
    //console.log(item) 
    const renderItems = ({ item }) => {
      return <Text style={{ color: day[index].includes(item.id) ? "#00ADB5" : "white", marginHorizontal: 8, marginTop: 20 }}
        onPress={() => {
            setDay(day.map((element, i)=>{ 
              if(i===index){  
                return [...element, item.id]
              }
              return element
            }))   
        }}
      >{item.day}</Text>
    }
    return <View style={{
      backgroundColor: '#222831', width: 370, height: 120, marginTop: 25, marginLeft: 20, flexDirection: "row", elevation: 10,
      shadowColor: "black", marginBottom: index === data.length - 1 ? 80 : 0
    }}>
      <View>
        <Image source={{uri: item.image}} style={{ width: 100, height: 90, marginTop: 15, marginLeft: 9, borderRadius: 20 }} />
        <Text style={{ color: "white", marginTop: -24, marginLeft: 15, fontWeight: "bold" }}>{item.title}</Text>
      </View>
      <View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ marginLeft: 25, marginTop: 20 }}> 
            <Text style={{ color: "white" }}>Set</Text>
            <TextInput style={{ width: 50 }} underlineColorAndroid="grey" />
          </View>
          <View style={{ marginLeft: 12, marginTop: 20 }}>
            <Text style={{ color: "white" }}>Reps</Text>
            <TextInput style={{ width: 50 }} underlineColorAndroid="grey" />
          </View>
          <View style={{ marginLeft: 12, marginTop: 20 }}>
            <Text style={{ color: "white" }}>Rest</Text>
            <TextInput style={{ width: 50 }} underlineColorAndroid="grey" />
          </View>
        </View>
        <FlatList style={{ marginLeft: 20 }} horizontal data={days} renderItem={renderItems} keyExtractor={(item) => item.id} />
      </View>
      <View style={{ justifyContent: "center", height: 120, width: 50, backgroundColor: '#eb1919', marginLeft: 6 }}>
        <Icon name="delete" color="white" onPress={() => {
          const newData = data.filter((items) => items.id !== item.id)
          setData(newData)
        }}
        />
      </View>
      
    </View>
  }
  
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => {
          navigation.goBack();
        }}>
          <Text
            style={{
              fontSize: 35,
              color: "white",
              fontWeight: "bold",
              marginTop: 25,
              marginLeft: 20,
            }}
          >
            &lt;
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 25,
            color: "white",
            flexDirection: "row",
            marginTop: 33,
            marginLeft: 80,
            fontFamily: "Rambla",
          }}
        >
          Select Exercise
        </Text>
        <TouchableOpacity onPress={() => {
          alert("Workout created!")
          navigation.navigate('Home')
        }}>
          <Text
            style={{
              fontSize: 20,
              color: "white",
              flexDirection: "row",
              marginTop: 39,
              marginLeft: 45,
              fontFamily: "Rambla",
            }}
          >
            Skip
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />
      </View>
      <TouchableOpacity onPress={() => {
        alert("Workout created!")
        navigation.navigate('Home')
      }} style={styles.buttonStyling}>
        <Text
          style={{ 
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
            marginLeft: 150,
            textShadowColor: "#000",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 1,
          }}
        >
          Next
        </Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#393E46", flex: 1, fontFamily: "Rambla" },
  buttonStyling: {
    backgroundColor: "#00ADB566", width: 350, height: 40, marginLeft: 30, alignContent: "center", justifyContent: "center",
    borderRadius: 30, shadowColor: "black", elevation: 8, marginTop: 250, position: "absolute", marginTop: 760
  },
});
