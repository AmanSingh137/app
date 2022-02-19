import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, ScrollView } from "react-native";
import { Icon } from 'react-native-elements'

export default function AboutUser({ navigation }) {
    const [men, setMen] = useState(0)
    const [women, setWomen] = useState(0)
    const [gen, setGen] = useState('')
    const [name, setName] = useState('');
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity ><Text style={{ fontSize: 40, color: 'white', marginLeft: 15, marginTop: 20 }} onPress={() => {
                    navigation.goBack()
                }}>←</Text></TouchableOpacity>
                <Text style={{ fontSize: 35, color: 'white', marginLeft: 90, marginTop: 28 }}>Profile</Text>
            </View>
            <TouchableOpacity style={{ height: 120, width: 120, backgroundColor: 'grey', borderRadius: 100, marginLeft: 140, marginTop: 30 }}>
                <Image source={require('./images/coolicon.png')} style={{ marginLeft: 35, marginTop: 25 }} />
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: "#00ADB5", width: 40, height: 40, borderRadius: 50, marginLeft: 230, marginTop: -30 }}>
                <Icon name="add" color="white" size={20} style={{ marginTop: 10 }} />
            </TouchableOpacity>
            <ScrollView>
                <Text style={{ color: 'white', fontSize: 14, marginLeft: 30, marginTop: 30 }}>Name</Text>
                <TextInput underlineColorAndroid="grey" style={{ width: 350, marginLeft: 25, marginTop: 10, color: 'white', fontWeight: "bold" }}
                onChangeText={(query)=>{
                    setName(query)
                }} />
                <Text style={{ color: 'white', fontSize: 14, marginLeft: 30, marginTop: 20 }}>Age</Text>
                <TextInput underlineColorAndroid="grey" style={{ width: 350, marginLeft: 25, marginTop: 10, color: 'white', fontWeight: "bold" }} />
                <Text style={{ color: 'white', fontSize: 14, marginLeft: 30, marginTop: 20 }}>Gender</Text>
                <View style={{ flexDirection: "row", marginLeft: 250 }}>
                    <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => {
                        setMen(1)
                        setWomen(0)
                        setGen("Male")
                    }}>
                        <View style={{ height: 10, width: 10, backgroundColor: men === 0 ? 'white' : '#00ADB5', borderRadius: 50 }}></View>
                        <Text style={{ color: men === 0 ? 'white' : '#00ADB5', marginTop: -6 }}> Male</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: "row", marginLeft: 10 }} onPress={() => {
                        setMen(0)
                        setWomen(1)
                        setGen("Female")
                    }}>
                        <View style={{ height: 10, width: 10, backgroundColor: women === 0 ? 'white' : '#00ADB5', borderRadius: 50 }}></View>
                        <Text style={{ color: women === 0 ? 'white' : '#00ADB5', marginTop: -6 }}> Female</Text>
                    </TouchableOpacity>
                </View>
                <TextInput underlineColorAndroid="grey" style={{ width: 350, marginLeft: 25, marginTop: -10, color: 'white', fontWeight: "bold" }} value={gen} />
                <Text style={{ color: 'white', fontSize: 14, marginLeft: 30, marginTop: 20 }}>Number</Text>
                <TextInput underlineColorAndroid="grey" style={{ width: 350, marginLeft: 25, marginTop: 10, color: 'white', fontWeight: "bold" }} />
                <Text style={{ color: 'white', fontSize: 14, marginLeft: 30, marginTop: 20 }}>Mail</Text>
                <TextInput underlineColorAndroid="grey" style={{ width: 350, marginLeft: 25, marginTop: 10, color: 'white', fontWeight: "bold" }} />
            </ScrollView>
            <View style={{ flexDirection: "row", marginLeft: 10 }}>
                <View style={{ width: 12, height: 12, backgroundColor: '#00ADB5', borderRadius: 50, marginLeft: 150, marginBottom: 60 }}></View>
                <View style={{ width: 10, height: 10, backgroundColor: 'white', borderRadius: 50, marginLeft: 10, marginBottom: 54 }}></View>
                <View style={{ width: 10, height: 10, backgroundColor: 'white', borderRadius: 50, marginLeft: 10, marginBottom: 54 }}></View>
                <View style={{ width: 10, height: 10, backgroundColor: 'white', borderRadius: 50, marginLeft: 10, marginBottom: 54 }}></View>
            </View>
            <TouchableOpacity
                style={{
                    backgroundColor: "#00ADB566",
                    width: 300,
                    height: 40,
                    marginLeft: 50,
                    alignContent: "center",
                    justifyContent: "center",
                    borderRadius: 30,
                    shadowColor: "black",
                    elevation: 8,
                    marginBottom: 40
                }}
                onPress={()=>{
                    navigation.navigate('WorkExperience', {name: name})
                }}
            >
                <Text
                    style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 20,
                        alignSelf: 'center',
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
    container: { backgroundColor: "#393E46", flex: 1 },
});
