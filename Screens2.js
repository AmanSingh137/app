import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import axios from 'axios'

let DATA = [
  {
    id: 1,
    thumbnail_url: "./images/image1.jpg",
    name: "Push ups",
  },
  {
    id: 2,
    thumbnail_url: "./images/image2.jpg",
    name: "Biceps",
  },
  {
    id: 3,
    thumbnail_url: "./images/image3.jpg",
    name: "Abs",
  },
  {
    id: 4,
    thumbnail_url: "./images/image4.jpg",
    name: "Heavy lifting",
  },
  {
    id: 5,
    thumbnail_url: "./images/cardio.jpg",
    name: "Cardio",
  },
  {
    id: 6,
    thumbnail_url: "./images/back.jpg",
    name: "Back",
  },
];

export default function Screen2({ navigation, route }) {
  const {id} = route.params
  const [checkBoxState, setCheckBoxState] = useState(false);
  const [data, setData] = useState(DATA);
  const [num, setNum] = useState(0)
  const [sendingData, setSendingData] = useState([])
  const [searchString, setSearchString] = useState("");

  const handleSearchBar = (query) => {
    setSearchString(query);
    if (searchString.length > 0) {
      const newData = data.filter((item) => {
        const d = item.title.toLowerCase();
        const m = query.toLowerCase();
        return d.indexOf(m) > -1;
      });
      setData(newData);
    }
    if (query.length === 0) {
      setData(DATA);
    }
  };

  const handleEvent = () => {
    try {
      axios.get('https://next-stage.hyperfit.live/api/fitness/fitness_exercises/read', {
        headers: {
          Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZiNzU1MDUyLWE2ZGEtNGFkYi1hYzg3LTNlM2I5MjI1ZjIyMCIsInJvbGUiOiJUUkFJTkVSIiwiaWF0IjoxNjQ0Mjk1OTYwLCJleHAiOjE2NDU1OTE5NjB9.WucJlrWgKWLes1z0w8lTQuBogXSDthMVrry07DUD8DI'
        }
      })
        .then(function (response) {
          const json = JSON.parse(response.request._response) 
          setData(json.fitness_exercises);     
        }) 
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    handleEvent();
    
  }, []);
  

  const renderItem = ({ item }) => {
    const url = item.thumbnail_url, name= item.name;
    console.log(url, name, item.thumbnail_url, item.name);
    return <TouchableOpacity onPress={() => {
      const found = sendingData.find(element => element.id === item.id)
      if (found !== undefined) {
        const newObj = sendingData.filter((items) => items.id !== item.id)
        setSendingData(newObj)
        setNum(num - 1)
      } else {
        setNum(num + 1)
        const obj = { id: item.id, image: item.thumbnail_url, title: item.name }
        setSendingData([...sendingData, obj])
      }
      setCheckBoxState(!checkBoxState);
      console.log((() => {
        return sendingData.some((value) => {
          return value.id === item.id
        })
      })())
    }}>
      <ImageBackground
        source={{uri: url}}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.image}
      >
        <View style={styles.item}>
          <BouncyCheckbox
            size={15}
            onPress={() => {
              const found = sendingData.find(element => element.id === item.id)
              if (found !== undefined) {
                const newObj = sendingData.filter((items) => items.id !== item.id)
                setSendingData(newObj)
                setNum(num - 1)
              } else {
                setNum(num + 1)
                const obj = { id: item.id, image: url, title: item.name }
                setSendingData([...sendingData, obj])
              }
              setCheckBoxState(!checkBoxState);
            }}
            isChecked={
              (() => {
                return sendingData.some((value) => {
                  return value.id === item.id
                })
              })()
            }
            disableBuiltInState={true}
            fillColor="grey"
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "white" }}
            style={{ marginLeft: 90, marginTop: 20 }}
          />
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  };

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
            marginLeft: 90,
            
          }}
        >
          Select Exercise
        </Text>
        <TouchableOpacity onPress={() => {
          navigation.navigate('FinalWorkout')
        }}>
          <Text
            style={{
              fontSize: 20,
              color: "white",
              flexDirection: "row",
              marginTop: 39,
              marginLeft: 45,
              
            }}
          >
            Skip
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.input}
          placeholder="Enter exercise name"
          onChangeText={handleSearchBar}
        />
        <TouchableOpacity>
          <Image
            source={require("./ImportedIcons/Icon.png")}
            style={{ marginLeft: 20, marginBottom: 6 }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <FlatList
          contentContainerStyle={{ alignSelf: "flex-start", marginBottom: 30 }}
          numColumns={3}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />

      </ScrollView>
      <TouchableOpacity onPress={() => {
        navigation.navigate('FinalWorkout', {data: sendingData, plan_id: id})
      }} style={styles.buttonStyling} >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
            alignSelf: "center",
            textShadowColor: "#000",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 1,
          }}
        >
          {num > 0 ? "Save" : "Add Exercise"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#393E46", flex: 1, },

  input: {
    height: 40,
    width: 320,
    marginTop: 5,
    marginLeft: 30,
    padding: 10,
    backgroundColor: "#FFF",
    borderRadius: 100,
    marginBottom: 10,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 10, height: 20 },
    shadowOpacity: 10,
    shadowRadius: 10,
  },

  searchSection: {
    backgroundColor: "#393E46",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column"
  },

  image: {
    width: 105,
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 20,
    marginTop: 10,
    height: 150,
    marginBottom: 10,
  },

  text: {
    color: "white",
    fontSize: 16,
    alignSelf: "flex-start",
    fontWeight: "bold",
    marginLeft: 12,
    textShadowColor: "#00ADB566",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  buttonStyling: {
    backgroundColor: "#00ADB566",
    position: "absolute",
    width: 300,
    height: 40,
    marginLeft: 60,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 30,
    shadowColor: "black",
    elevation: 8,
    marginBottom: 0,
    marginTop: 750,
  },
});
