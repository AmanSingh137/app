import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Icon } from 'react-native-elements'
//import uuid from 'react-native-uuid'
import axios from 'axios';

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
  const [data, setData] = useState(route.params.data)
  const [day, setDay] = useState(data.map(() => { return [] })) //
  const [sets, setSets] = useState(data.map(() => { return '' }))//
  const [reps, setReps] = useState(data.map(() => { return '' }))//
  const [rest, setRest] = useState(data.map(() => { return '' })) //
  const [images, setImages] = useState(data.map(() => { return '' })) //
  const [ID, setIDs] = useState(data.map(() => { return 0 })) //
  const [titles, setTitles] = useState(data.map(() => { return '' })) //

  let n = route.params.data.length
  const handleChanges = () => {
    setIDs(ID.map((value, i) => {
      return data[i].id
    }))
    setImages(images.map((value, i) => {
      return data[i].image
    }))
    setTitles(titles.map((value, i) => {
      return data[i].title
    }))
  }

  useEffect(() => {
    handleChanges();
  }, [])


  const renderItem = ({ item, index }) => {
    const renderItems = ({ item }) => {
      return <Text style={{ color: day[index].includes(item.id) ? "#00ADB5" : "white", marginHorizontal: 8, marginTop: 20 }}
        onPress={() => {
          setDay(day.map((element, i) => {
            if (i === index) {
              if (element.includes(item.id)) {
                return element.filter((j) => j !== item.id)
              }
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
        <Image source={{ uri: item.image }} style={{ width: 100, height: 90, marginTop: 15, marginLeft: 9, borderRadius: 20 }} />
        <Text style={{ color: "white", marginTop: -24, marginLeft: 15, fontWeight: "bold" }}>{item.title}</Text>
      </View>
      <View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ marginLeft: 25, marginTop: 20 }}>
            <Text style={{ color: "white" }}>Set</Text>
            <TextInput style={{ width: 50, color: 'white' }} value={sets[index]} underlineColorAndroid="grey" onChangeText={(query) => {
              setSets(sets.map((value, i) => {
                if (i === index) return query;
                return value;
              }))
            }} />

          </View>
          <View style={{ marginLeft: 12, marginTop: 20 }}>
            <Text style={{ color: "white" }}>Reps</Text>
            <TextInput style={{ width: 50, color: '#fff' }} value={reps[index]} underlineColorAndroid="grey" onChangeText={(query) => {
              setReps(reps.map((value, i) => {
                if (i === index) return query;
                return value;
              }))
            }} />
          </View>
          <View style={{ marginLeft: 12, marginTop: 20 }}>
            <Text style={{ color: "white" }}>Rest</Text>
            <TextInput style={{ width: 50, color: '#fff' }} value={rest[index]} underlineColorAndroid="grey" onChangeText={(query) => {
              setRest(rest.map((value, i) => {
                if (i === index) return query;
                return value;
              }))
            }} />
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
          }}
        >
          Select Exercise
        </Text>
        <TouchableOpacity onPress={() => {
          console.log(ID, titles, images);
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
            }}
          >
            Skip
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />
      </View>
      <TouchableOpacity onPress={() => {
        let arr = [];
        for (let i = 0; i < n; i++) {
          let cons = ""
          for (let j = 0; j < day[i].length; j++) {
            cons += day[i][j]
            if(j!==day[i].length-1) cons += ","
          }
          let newObj = {
            plan_id: route.params.plan_id,
            exercise_id: ID[i], periodicity: "5",
            minsets: sets[i], minreps: reps[i], mintime: rest[i],
            day: cons
          }
          arr.push(newObj);
        }
        console.log(JSON.stringify(arr));
        axios.post('https://next-stage.hyperfit.live/api/trainer/add_exercise_plan', JSON.stringify(arr), {
          headers: {
            Accept: 'application/json, text/plain, */*',
            Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZiNzU1MDUyLWE2ZGEtNGFkYi1hYzg3LTNlM2I5MjI1ZjIyMCIsInJvbGUiOiJUUkFJTkVSIiwiaWF0IjoxNjQ0Mjk2NjMzLCJleHAiOjE2NDU1OTI2MzN9.FYTXjFkbg64dv6i8tIgXPWCC971WDiAnboKoIXN6WNI',
          },
        })
          .then((Response) => console.log(Response))
          .catch((err) => console.log(err))
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
  container: { backgroundColor: "#393E46", flex: 1, },
  buttonStyling: {
    backgroundColor: "#00ADB566", width: 350, height: 40, marginLeft: 30, alignContent: "center", justifyContent: "center",
    borderRadius: 30, shadowColor: "black", elevation: 8, marginTop: 250, position: "absolute", marginTop: 760
  },
});
