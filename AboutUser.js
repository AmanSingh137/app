import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { Icon } from 'react-native-elements'

export default function AboutUser() {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 40, color: 'white', marginLeft: 15, marginTop: 20 }}>&lt;</Text>
                <Text style={{ fontSize: 35, color: 'white', marginLeft: 110, marginTop: 28 }}>Profile</Text>
            </View>
            <TouchableOpacity style={{ height: 150, width: 150, backgroundColor: 'grey', borderRadius: 100, marginLeft: 130, marginTop: 30 }}>
                <Image source={require('./images/coolicon.png')} style={{ marginLeft: 48, marginTop: 38 }} />
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: "#00ADB5",width:40, height: 40, borderRadius: 50, marginLeft: 240, marginTop: -30 }}>
                <Icon name="add" color="white" size={20} style={{marginTop: 10}} />
            </TouchableOpacity>
            <Text style={{color: 'white', fontSize: 14, marginLeft: 30, marginTop: 30}}>Name</Text>
            <TextInput underlineColorAndroid="grey" style={{width: 350, marginLeft: 25,  color: 'white'}}  />
            <Text style={{color: 'white', fontSize: 14, marginLeft: 30, marginTop: 20}}>Age</Text>
            <TextInput underlineColorAndroid="grey" style={{width: 350, marginLeft: 25,  color: 'white'}}  />
            <Text style={{color: 'white', fontSize: 14, marginLeft: 30, marginTop: 20}}>Gender</Text>
            <TextInput underlineColorAndroid="grey" style={{width: 350, marginLeft: 25,  color: 'white'}} />
            <Text style={{color: 'white', fontSize: 14, marginLeft: 30, marginTop: 20}}>Number</Text>
            <TextInput underlineColorAndroid="grey" style={{width: 350, marginLeft: 25,  color: 'white'}} />
            <Text style={{color: 'white', fontSize: 14, marginLeft: 30, marginTop: 20}}>Mail</Text>
            <TextInput underlineColorAndroid="grey" style={{width: 350, marginLeft: 25,  color: 'white'}} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { backgroundColor: "#393E46", flex: 1 },
});
