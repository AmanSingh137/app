import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, ImageBackground } from 'react-native';

export default function Graph({ h1 }) {
   const a = h1;
    return (
        <View>
            <View style={{height: a, backgroundColor: "aqua", width: 2, borderRadius: 10}}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { backgroundColor: "#393E46", flex: 1 },
});