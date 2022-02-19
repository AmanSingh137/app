import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, ScrollView, FlatList } from "react-native";
import { Icon } from 'react-native-elements'

const data = [
    {
        id: 1,
        title: "Work Experience"
    },
    {
        id: 2,
        title: "Upload Photos"
    },
    {
        id: 3,
        title: "Social Info"
    }
]

export default function PhotoUpload({ navigation, route }) {
    const { name } = route.params;
    const renderItem = ({ item }) => {
        return <TouchableOpacity style={{
            width: 200, height: 30, borderRadius: 25, backgroundColor: item.id === 2 ? '#00ADB5' : 'grey',
            marginLeft: 10
        }} onPress={() => {
            if (item.id === 1) navigation.navigate('WorkExperience', { name: name })
            if(item.id===3)
            {
                navigation.navigate('SocialInfo', {name: name})
            }
        }} >
            <Text style={{ color: "white", alignSelf: "center", marginTop: 3 }}>
                {item.title}
            </Text>
        </TouchableOpacity>
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={
                    ()=>{
                        navigation.navigate('SocialInfo', {name: name})
                    }
                }>
                <Text style={{ marginLeft: 356, position: "absolute", fontSize: 20, color: '#00ADB5', marginTop: 40 }}>Skip</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }}>
                    <Text style={{ color: "white", fontSize: 30, marginTop: 30, marginLeft: 10 }}>←</Text>
                </TouchableOpacity>
                <Text style={{ color: 'white', fontSize: 28, marginLeft: 10, marginTop: 30 }}>{name}</Text>
            </View>
            <View style={{ marginTop: 10 }}>
                <FlatList data={data} horizontal renderItem={renderItem} />
            </View>
            <View style={{
                backgroundColor: "grey", color: "white", width: 390, height: 250, marginTop: 30,
                marginHorizontal: 10, elevation: 5, borderRadius: 10
            }}>
                <Text style={{ color: 'white', fontSize: 20, marginTop: 10, marginLeft: 10 }}>Your Transformation</Text>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ backgroundColor: "#00ADB566", height: 140, width: 100, marginLeft: 25, borderRadius: 10, marginTop: 5 }}>
                        <TouchableOpacity style={{ backgroundColor: "#00ADB5", width: 40, height: 40, borderRadius: 50, marginLeft: 28, marginTop: 40 }}>
                            <Icon name="add" color="white" size={20} style={{ marginTop: 10 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: "#00ADB566", height: 140, width: 100, marginLeft: 15, borderRadius: 10, marginTop: 5 }}>
                        <TouchableOpacity style={{ backgroundColor: "#00ADB5", width: 40, height: 40, borderRadius: 50, marginLeft: 28, marginTop: 40 }}>
                            <Icon name="add" color="white" size={20} style={{ marginTop: 10 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: "#00ADB566", height: 140, width: 100, marginLeft: 15, borderRadius: 10, marginTop: 5 }}>
                        <TouchableOpacity style={{ backgroundColor: "#00ADB5", width: 40, height: 40, borderRadius: 50, marginLeft: 28, marginTop: 40 }}>
                            <Icon name="add" color="white" size={20} style={{ marginTop: 10 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity>
                    <Text style={{ color: "#00ADB5", marginLeft: 250, marginTop: 20, fontWeight: "bold" }}>+  Upload Photos </Text>
                </TouchableOpacity>
            </View>
            <View style={{
                backgroundColor: "grey", color: "white", width: 390, height: 250, marginTop: 30,
                marginHorizontal: 10, elevation: 5, borderRadius: 10
            }}>
                <Text style={{ color: 'white', fontSize: 20, marginTop: 10, marginLeft: 10 }}>Your Transformation</Text>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ backgroundColor: "#00ADB566", height: 140, width: 100, marginLeft: 25, borderRadius: 10, marginTop: 5 }}>
                        <TouchableOpacity style={{ backgroundColor: "#00ADB5", width: 40, height: 40, borderRadius: 50, marginLeft: 28, marginTop: 40 }}>
                            <Icon name="add" color="white" size={20} style={{ marginTop: 10 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: "#00ADB566", height: 140, width: 100, marginLeft: 15, borderRadius: 10, marginTop: 5 }}>
                        <TouchableOpacity style={{ backgroundColor: "#00ADB5", width: 40, height: 40, borderRadius: 50, marginLeft: 28, marginTop: 40 }}>
                            <Icon name="add" color="white" size={20} style={{ marginTop: 10 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: "#00ADB566", height: 140, width: 100, marginLeft: 15, borderRadius: 10, marginTop: 5 }}>
                        <TouchableOpacity style={{ backgroundColor: "#00ADB5", width: 40, height: 40, borderRadius: 50, marginLeft: 28, marginTop: 40 }}>
                            <Icon name="add" color="white" size={20} style={{ marginTop: 10 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity>
                    <Text style={{ color: "#00ADB5", marginLeft: 250, marginTop: 20, fontWeight: "bold" }}>+  Upload Photos </Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 35 }}>
                <View style={{ width: 10, height: 10, backgroundColor: 'white', borderRadius: 50, marginLeft: 150, marginBottom: 60 }}></View>
                <View style={{ width: 10, height: 10, backgroundColor: 'white', borderRadius: 50, marginLeft: 10, marginBottom: 54 }}></View>
                <View style={{ width: 12, height: 12, backgroundColor: '#00ADB5', borderRadius: 50, marginLeft: 10, marginBottom: 54 }}></View>
                <View style={{ width: 10, height: 10, backgroundColor: 'white', borderRadius: 50, marginLeft: 10, marginBottom: 54 }}></View>
            </View>
            <TouchableOpacity
                style={{
                    backgroundColor: "#00ADB566",
                    width: 300,
                    height: 40,
                    marginLeft: 55,
                    alignContent: "center",
                    justifyContent: "center",
                    borderRadius: 30,
                    shadowColor: "black",
                    elevation: 8,
                    marginBottom: 80,
                    marginTop: -30
                }}
                onPress={
                    ()=>{
                        navigation.navigate('SocialInfo', {name: name})
                    }
                }
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
