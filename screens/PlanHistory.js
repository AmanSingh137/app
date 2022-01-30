import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ImageBackground } from 'react-native';

const DATA = [
  {
    id: 1,
    image: require('../images/image4.jpg'), 
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    title: "Workout1"
  }, 
  {
    id: 2,
    image: require('../images/image2.jpg'),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    title: "Workout2"
  }, 
  {
    id: 3, 
    image: require('../images/image1.jpg'),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
    title: "Workout3"
  }
];

//const image = require('../images/Workout2.png')


const Item = ({ image, text, title }) => (
  <ImageBackground source={image} resizeMode="cover" style={styles.image}  imageStyle={styles.image}>
  <View style={styles.item}>
   <Text style={styles.text}>{title}</Text>
   <Text style={styles.title}>{text}</Text>
  </View>
  </ImageBackground>
);

export default function PlanHistory () {
  const renderItem = ({ item }) => (
    <Item image={item.image} text={item.text} title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 12,
    marginBottom: 12
  },
  item: {
    borderRadius: 0,
    padding: 20,
    width: 200,
    height: 200,
    
  },
  title: {
    color: "white",
    fontSize: 10,
    marginTop: 80,
    textShadowColor: '#00ADB566', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 1
  },
  text: {
    color: "white",
    fontSize: 20,
    marginTop: -10, 
    fontWeight: "bold",
    textShadowColor: '#00ADB566', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 4
  },
  image: {
    width: 200,
    borderRadius: 50,
    marginLeft: 10,
    marginRight: 20,
    height: 220,
    justifyContent: "center"
  }
});

