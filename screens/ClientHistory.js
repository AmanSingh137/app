import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

const DATA = [
  {
    id: 1,
    image: require('../ClientImages/1.jpg'), 
    text: "Client 1"
  }, 
  {
    id: 2,
    image: require('../ClientImages/77.jpg'), 
    text: "Client 2"
  }, 
  {
    id: 3,
    image: require('../ClientImages/78.jpg'), 
    text: "Client 3"
  }, 
  {
    id: 4,
    image: require('../ClientImages/29.jpg'), 
    text: "Client 4"
  }, 
  {
    id: 5,
    image: require('../ClientImages/63.jpg'), 
    text: "Client 5"
  }, {
    id: 6,
    image: require('../ClientImages/43.jpg'), 
    text: "Client 6"
  }, 
];



export default function ClientHistory ({ navigation }) {
  const Item = ({ image, text}) => (
    <TouchableOpacity style={styles.item} onPress={
      ()=>{
        navigation.navigate('LiveScreen', {image: image, title: text})
      }
    }>
        <Image style={styles.image} source={image} />
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
  const renderItem = ({ item }) => (
    <Item image={item.image} text={item.text} />
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
    marginTop: 10,
  },
  item: {
    borderRadius: 0,
    padding: 20,
    width: 120,
    height: 180
  },
  
  text: {
    color: "white",
    fontSize: 14.5,
    marginTop: 5,
    marginLeft: 14
  },
  image: {
    width: 80,
    overflow: "hidden",
    borderRadius: 50,
    marginLeft: 5,
    marginRight: 5,
    height: 80,
    justifyContent: "center"
  }
});

