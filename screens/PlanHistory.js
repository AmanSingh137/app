import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ImageBackground, TouchableOpacity } from 'react-native';

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

export default function PlanHistory ({navigation}) {
  
  const renderItem = ({ item }) => {
    item.image === undefined ? require("../images/Workout3.png") : item.image
    return <TouchableOpacity onPress={()=>{
      navigation.navigate('WorkoutDetail', {
        title: item.name,
        text: item.description,
        image: item.image,
        id: item.id
      })
    }}>
    <ImageBackground source={item.image} resizeMode="cover" style={styles.image}  imageStyle={styles.image}>
    <View style={styles.item}>
     <Text style={styles.text}>{item.name}</Text>
     <Text style={styles.title}>{item.description}</Text>
    </View>
    </ImageBackground>
    </TouchableOpacity>
  };
  const [newData, setNewData] = useState(DATA)

  const getPlanList = async () => {
      try {
        const response = await fetch('http://3.17.135.71:8000/api/plan/get_all_plans/');
        const json = await response.json();
        setNewData(json);
      } catch (error) {
        console.error(error);
      } 
  }

  useEffect(() => {
    getPlanList();
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal
        data={newData}
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

