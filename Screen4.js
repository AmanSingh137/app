import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Pressable, ScrollView, TouchableOpacity, TextInput, FlatList, Button } from 'react-native';
//import Screen from './Screens';
import { Icon } from 'react-native-elements'
//import Screen2 from './Screens2';


//<Screen />
//<Screen2 /> 

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

export default function Screen4({navigation}) {
  const renderItems = ({ item }) => (
    <Text style={{color: "white", marginHorizontal: 8, marginTop: 20}}>{item.day}</Text>
  );

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={()=>{
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
        <TouchableOpacity onPress={()=>{
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
      <View style={{ backgroundColor: '#222831', width: 370, height: 120, marginTop: 25, marginLeft: 20, flexDirection: "row", elevation: 10,
      shadowColor: "black" }}>
             <View>
            <Image source={require('./images/image2.jpg')} style={{width: 100, height: 90, marginTop: 15, marginLeft: 9, borderRadius: 20}} />
            <Text style={{color: "white", marginTop: -24, marginLeft: 15, fontWeight: "bold"}}>Biceps</Text>
            </View>
            <View>
            <View style={{flexDirection: "row"}}>
            <View style={{marginLeft: 25, marginTop: 20}}>
              <Text style={{color: "white"}}>Set</Text>
              <TextInput style={{width: 50}} underlineColorAndroid="grey" />
            </View>
            <View style={{marginLeft: 12,  marginTop: 20}}>
              <Text style={{color: "white"}}>Reps</Text>
              <TextInput style={{width: 50}} underlineColorAndroid="grey" />
            </View>
            <View style={{marginLeft: 12,  marginTop: 20}}>
              <Text style={{color: "white"}}>Rest</Text>
              <TextInput style={{width: 50}} underlineColorAndroid="grey" />
            </View>
            </View>
            <FlatList style={{marginLeft: 20}} horizontal data={days} renderItem={renderItems} />
            </View>
            <View style={{height: 120, width: 50, backgroundColor: '#eb1919', marginLeft: 6}}>
              <Icon name="delete" color="white" style={{marginTop: 50}} />
            </View>
      </View>
      <View style={{ backgroundColor: '#222831', width: 370, height: 120, marginTop: 18, marginLeft: 20, flexDirection: "row", elevation: 10,
      shadowColor: "black" }}>
             <View>
            <Image source={require('./images/image3.jpg')} style={{width: 100, height: 90, marginTop: 15, marginLeft: 9, borderRadius: 20}} />
            <Text style={{color: "white", marginTop: -24, marginLeft: 15, fontWeight: "bold"}}>Abs</Text>
            </View>
            <View>
            <View style={{flexDirection: "row"}}>
            <View style={{marginLeft: 25, marginTop: 20}}>
              <Text style={{color: "white"}}>Set</Text>
              <TextInput style={{width: 50}} underlineColorAndroid="grey" />
            </View>
            <View style={{marginLeft: 12,  marginTop: 20}}>
              <Text style={{color: "white"}}>Reps</Text>
              <TextInput style={{width: 50}} underlineColorAndroid="grey" />
            </View>
            <View style={{marginLeft: 12,  marginTop: 20}}>
              <Text style={{color: "white"}}>Rest</Text>
              <TextInput style={{width: 50}} underlineColorAndroid="grey" />
            </View>
            </View>
            <FlatList style={{marginLeft: 20}} horizontal data={days} renderItem={renderItems} />
            </View>
            <View style={{height: 120, width: 50, backgroundColor: '#eb1919', marginLeft: 6}}>
              <Icon name="delete" color="white" style={{marginTop: 50}} />
            </View>
      </View>
      <View style={{ backgroundColor: '#222831', width: 370, height: 120, marginTop: 18, marginLeft: 20, flexDirection: "row", elevation: 10,
      shadowColor: "black" }}>
             <View>
            <Image source={require('./images/image4.jpg')} style={{width: 100, height: 90, marginTop: 15, marginLeft: 9, borderRadius: 20}} />
            <Text style={{color: "white", marginTop: -24, marginLeft: 15, fontWeight: "bold"}}>Heavy Lifting</Text>
            </View>
            <View>
            <View style={{flexDirection: "row"}}>
            <View style={{marginLeft: 25, marginTop: 20}}>
              <Text style={{color: "white"}}>Set</Text>
              <TextInput style={{width: 50}} underlineColorAndroid="grey" />
            </View>
            <View style={{marginLeft: 12,  marginTop: 20}}>
              <Text style={{color: "white"}}>Reps</Text>
              <TextInput style={{width: 50}} underlineColorAndroid="grey" />
            </View>
            <View style={{marginLeft: 12,  marginTop: 20}}>
              <Text style={{color: "white"}}>Rest</Text>
              <TextInput style={{width: 50}} underlineColorAndroid="grey" />
            </View>
            </View>
            <FlatList style={{marginLeft: 20}} horizontal data={days} renderItem={renderItems} />
            </View>
            <View style={{height: 120, width: 50, backgroundColor: '#eb1919', marginLeft: 6}}>
              <Icon name="delete" color="white" style={{marginTop: 50}} />
            </View>
      </View>
      <TouchableOpacity onPress={()=>{
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
  container: {backgroundColor: "#393E46", flex: 1, fontFamily: "Rambla"},
  buttonStyling: {
    backgroundColor: "#00ADB566", width: 350, height: 40, marginLeft: 30, alignContent: "center", justifyContent: "center",
    borderRadius: 30, shadowColor: "black", elevation: 8, marginBottom: 10, marginTop: 250
  },
});
