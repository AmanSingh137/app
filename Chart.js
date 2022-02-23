import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, ImageBackground } from 'react-native';

export default function Chart({ h1, h2 }) {
   const a = h1, b = h2;
    return (
        <View>
            <View style={{height: a, backgroundColor: "#00ADB5", width: 2}}></View>
            <View style={{height: b, backgroundColor: "aqua", width: 2}}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { backgroundColor: "#393E46", flex: 1 },
});