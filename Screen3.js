import React from 'react';
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

export default function Screen3() {

  const renderItem = ({ item }) => (
    <Text style={{ marginLeft: 5, color: "white", marginTop: 5 }}>{item.text}</Text>
  );
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity>
          <Text style={{ fontSize: 30, color: "white", fontWeight: "bold", marginTop: 30, marginLeft: 20 }}>&lt;</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 20, color: "white", flexDirection: "row", marginTop: 38, marginLeft: 65, fontFamily: 'Rambla_400Regular' }}>
          Create workout class</Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 18, color: "white", flexDirection: "row", marginTop: 39, marginLeft: 40, fontFamily: 'Rambla_400Regular' }}>
            Skip</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ color: "grey", fontSize: 15, marginLeft: 20 }}>Plan name</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="grey"
      />

      <View style={{ backgroundColor: "rgba(255, 255, 255, 0.4)", width: 120, height: 120, marginLeft: 280, marginTop: -50, borderRadius: 25 }}>
        <TouchableOpacity>
          <Icon name="add" color="white" size={40} style={{ marginTop: 30 }} />
        </TouchableOpacity>
      </View>
      <Text style={{ color: "grey", marginLeft: 20 }} >Description</Text>
      <View style={{ elevation: 2,color: "white",backgroundColor: "rgba(255, 255, 255)", marginTop: 0, width: 380, 
      borderRadius: 20, marginLeft: 20 }}>
        <TextInput style={{
           color: "white", padding: 15 ,textAlignVertical: "top",
        }} multiline
          numberOfLines={6} />
      </View>
      <Pressable style={styles.buttonStyling}>
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
      </Pressable>
      <Text style={{ color: "white", fontSize: 25, marginLeft: 20 }}>Create workout class</Text>
      <ScrollView>
        <View style={{
          flexDirection: "row", width: 380, backgroundColor: "rgba(255, 255, 255, 0.4)",
          height: 150, borderRadius: 10, marginLeft: 20
        }}>
          <Image source={require('./images/image3.jpg')} style={{
            width: 105, borderRadius: 20, marginLeft: 10, marginRight: 20, marginTop: 10,
            height: 120, justifyContent: "center"
          }} />
          <View style={{ width: 80 }}>
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 16 }}>Abs</Text>
            <Text style={{ color: "white", fontSize: 10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing
              sed do eiusmod tempor incididunt</Text>

          </View>
          <View style={{ height: 130, marginTop: 5, width: 1, backgroundColor: '#000', }}></View>
          <View style={{ width: 70 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", marginLeft: 5, marginTop: 10 }} >Set</Text>
              <Icon name="arrow-right" color="white" style={{ marginLeft: -2, marginTop: 10 }} />
              <Text style={{ color: "white", marginLeft: -2, marginTop: 11, fontSize: 13 }} >10-15</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", marginLeft: 5, marginTop: 10 }} >Rep</Text>
              <Icon name="arrow-right" color="white" style={{ marginLeft: -2, marginTop: 10 }} />
              <Text style={{ color: "white", marginLeft: -4, marginTop: 11, fontSize: 13 }} >12-16</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", marginLeft: 5, marginTop: 10 }} >Rest</Text>
              <Icon name="arrow-right" color="white" style={{ marginLeft: -2, marginTop: 10 }} />
              <Text style={{ color: "white", marginLeft: -4, marginTop: 11, fontSize: 13 }} >30-40s</Text>
            </View>
          </View>
          <View style={{ height: 130, marginTop: 5, width: 1, backgroundColor: '#000', marginLeft: 30 }}></View>
          <FlatList
            contentContainerStyle={{ alignSelf: 'flex-start' }}
            numColumns={2}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={{
          flexDirection: "row", width: 380, backgroundColor: "rgba(255, 255, 255, 0.4)",
          height: 150, borderRadius: 10, marginLeft: 20, marginTop: 10
        }}>
          <Image source={require('./images/image3.jpg')} style={{
            width: 105, borderRadius: 20, marginLeft: 10, marginRight: 20, marginTop: 10,
            height: 120, justifyContent: "center"
          }} />
          <View style={{ width: 80 }}>
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 16 }}>Abs</Text>
            <Text style={{ color: "white", fontSize: 10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing
              sed do eiusmod tempor incididunt</Text>

          </View>
          <View style={{ height: 130, marginTop: 5, width: 1, backgroundColor: '#000', }}></View>
          <View style={{ width: 70 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", marginLeft: 5, marginTop: 10 }} >Set</Text>
              <Icon name="arrow-right" color="white" style={{ marginLeft: -2, marginTop: 10 }} />
              <Text style={{ color: "white", marginLeft: -2, marginTop: 11, fontSize: 13 }} >10-15</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", marginLeft: 5, marginTop: 10 }} >Rep</Text>
              <Icon name="arrow-right" color="white" style={{ marginLeft: -2, marginTop: 10 }} />
              <Text style={{ color: "white", marginLeft: -4, marginTop: 11, fontSize: 13 }} >12-16</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", marginLeft: 5, marginTop: 10 }} >Rest</Text>
              <Icon name="arrow-right" color="white" style={{ marginLeft: -2, marginTop: 10 }} />
              <Text style={{ color: "white", marginLeft: -4, marginTop: 11, fontSize: 13 }} >30-40s</Text>
            </View>
          </View>
          <View style={{ height: 130, marginTop: 5, width: 1, backgroundColor: '#000', marginLeft: 30 }}></View>
          <FlatList
            contentContainerStyle={{ alignSelf: 'flex-start' }}
            numColumns={2}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={{
          flexDirection: "row", width: 380, backgroundColor: "rgba(255, 255, 255, 0.4)",
          height: 150, borderRadius: 10, marginLeft: 20, marginTop: 10
        }}>
          <Image source={require('./images/image3.jpg')} style={{
            width: 105, borderRadius: 20, marginLeft: 10, marginRight: 20, marginTop: 10,
            height: 120, justifyContent: "center"
          }} />
          <View style={{ width: 80 }}>
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 16 }}>Abs</Text>
            <Text style={{ color: "white", fontSize: 10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing
              sed do eiusmod tempor incididunt</Text>

          </View>
          <View style={{ height: 130, marginTop: 5, width: 1, backgroundColor: '#000', }}></View>
          <View style={{ width: 70 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", marginLeft: 5, marginTop: 10 }} >Set</Text>
              <Icon name="arrow-right" color="white" style={{ marginLeft: -2, marginTop: 10 }} />
              <Text style={{ color: "white", marginLeft: -2, marginTop: 11, fontSize: 13 }} >10-15</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", marginLeft: 5, marginTop: 10 }} >Rep</Text>
              <Icon name="arrow-right" color="white" style={{ marginLeft: -2, marginTop: 10 }} />
              <Text style={{ color: "white", marginLeft: -4, marginTop: 11, fontSize: 13 }} >12-16</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", marginLeft: 5, marginTop: 10 }} >Rest</Text>
              <Icon name="arrow-right" color="white" style={{ marginLeft: -2, marginTop: 10 }} />
              <Text style={{ color: "white", marginLeft: -4, marginTop: 11, fontSize: 13 }} >30-40s</Text>
            </View>
          </View>
          <View style={{ height: 130, marginTop: 5, width: 1, backgroundColor: '#000', marginLeft: 30 }}></View>
          <FlatList
            contentContainerStyle={{ alignSelf: 'flex-start' }}
            numColumns={2}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
      <Pressable style={{
        backgroundColor: "#00ADB5ff", width: 380, height: 40, marginLeft: 20, alignContent: "center", justifyContent: "center",
        borderRadius: 30, shadowColor: "black", elevation: 100, marginBottom: 10, marginTop: 750, position: "absolute", opacity: 1
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
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#393E46', flex: 1 },
  input: {
    backgroundColor: "#393E46", width: 220, marginLeft: 20, height: 40, shadowColor: "#000", shadowOpacity: 0.8,
    color: "white", fontWeight: "bold", fontSize: 20
  },
  buttonStyling: {
    backgroundColor: "#00ADB566", width: 100, height: 40, marginLeft: 300, alignContent: "center", justifyContent: "center",
    borderRadius: 30, shadowColor: "black", elevation: 8, marginBottom: 10, marginTop: 10
  },
});