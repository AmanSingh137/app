import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { Icon } from "react-native-elements";
import { useFonts } from "expo-font";
import BouncyCheckbox from "react-native-bouncy-checkbox";

let DATA = [
  {
    id: 1,
    image: require("./images/image1.jpg"),
    title: "Push ups",
  },
  {
    id: 2,
    image: require("./images/image2.jpg"),
    title: "Biceps",
  },
  {
    id: 3,
    image: require("./images/image3.jpg"),
    title: "Abs",
  },
  {
    id: 4,
    image: require("./images/image4.jpg"),
    title: "Heavy lifting",
  },
  {
    id: 5,
    image: require("./images/cardio.jpg"),
    title: "Cardio",
  },
  {
    id: 6,
    image: require("./images/back.jpg"),
    title: "Back",
  },
];
const Item = ({ image, title }) => (
  <ImageBackground
    source={image}
    resizeMode="cover"
    style={styles.image}
    imageStyle={styles.image}
  >
    <View style={styles.item}>
      <BouncyCheckbox
        size={15}
        fillColor="green"
        unfillColor="#FFFFFF"
        iconStyle={{ borderColor: "white" }}
        style={{ marginLeft: 90, marginBottom: -20 }}
      />
      <Text style={styles.text}>{title}</Text>
    </View>
  </ImageBackground>
);

export default function Screen2() {
  const [data, setData] = useState(DATA);
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

 

  const [loaded] = useFonts({
    Rambla: require("./assets/fonts/Rambla-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const renderItem = ({ item }) => (
    <Item image={item.image} title={item.title} />
  );

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity>
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
            fontFamily: "Rambla",
          }}
        >
          Select Exercise
        </Text>
        <TouchableOpacity>
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
      <View style={styles.searchSection}>
        <TextInput
          style={styles.input}
          placeholder="Enter exercise name"
          onChangeText={handleSearchBar}
        />
        {/* <Text>{searchString}</Text> */}
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
        <FlatList
          contentContainerStyle={{ alignSelf: "flex-start", marginBottom: 10 }}
          numColumns={3}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
      <Pressable style={styles.buttonStyling}>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
            marginLeft: 90,
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
  container: { backgroundColor: "#393E46", flex: 1, fontFamily: "Rambla" },

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

  image: {
    width: 105,
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 20,
    marginTop: 10,
    height: 150,
    justifyContent: "center",
    marginBottom: 10,
  },

  text: {
    color: "white",
    fontSize: 16,
    marginTop: 100,
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
