import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, ImageBackground, FlatList } from 'react-native';
import {
    StackedBarChart,
    BarChart
} from 'react-native-chart-kit'
import Chart from './Chart';
import Graph from './Graph';

export default function LiveScreen({ navigation, route }) {
    const { image, title } = route.params;
    const data = [
        { i1: 20, i2: 40 },
        { i1: 10, i2: 16 },
        { i1: 12, i2: 20 },
        { i1: 32, i2: 64 },
        { i1: 50, i2: 4 },
        { i1: 50, i2: 50 },
        { i1: 50, i2: 25 },
        { i1: 35, i2: 20 },
        { i1: 30, i2: 16 },
        { i1: 15, i2: 12 },
        { i1: 32, i2: 12 }, { i1: 26, i2: 16 },
    ]
    const Item = ({ a1, a2 }) => {
        //console.log(a1, a2);
        return <Chart h1={a1} h2={a2} />
    }
    const Items = ({ a1 }) => {
        //console.log(a1, a2);
        return <Graph h1={a1} />
    }
    const renderItems = ({ item }) => {
        // console.log(item, index)
        return <View style={{ marginHorizontal: 3 }}>
            <Items a1={item.i1} />
        </View>
    }
    const renderItem = ({ item }) => {
        // console.log(item, index)
        return <View style={{ marginHorizontal: 3 }}>
            <Item a1={item.i1} a2={item.i2} />
        </View>
    }
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
                <TouchableOpacity>
                    <Image source={require('./ImportedIcons/Vector.png')} style={{ marginTop: 50, marginLeft: 20, tintColor: '#00ADB5' }} />
                </TouchableOpacity>
                <Text style={{ color: 'white', fontSize: 20, marginLeft: 85, marginTop: 42 }}>{title}</Text>
                <Image source={image} style={{ height: 60, width: 60, borderRadius: 10, marginLeft: 10, marginTop: 25 }} />
                <TouchableOpacity>
                    <Image source={require('./ImportedIcons/powerButton.png')} style={{ marginLeft: 90, marginTop: 48, tintColor: '#00ADB5' }} />
                </TouchableOpacity>
            </View>
            <ImageBackground source={require('./images/yoga.png')} style={{

                height: 340, width: 340, borderRadius: 10, overflow: "hidden", marginTop: 40, marginHorizontal: 33
            }}>
                <View style={{ flexDirection: "column", marginTop: 10, marginLeft: 10 }}>
                    <TouchableOpacity style={{ backgroundColor: "white", height: 30, width: 30, borderRadius: 50 }}>
                        <Image source={require('./ImportedIcons/video-camera.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "white", height: 30, width: 30, borderRadius: 50, marginTop: 5 }}>
                        <Image source={require('./ImportedIcons/phone.png')} style={{ height: 28, width: 28, marginLeft: 1 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "white", height: 30, width: 30, borderRadius: 50, marginTop: 5 }}>
                        <Image source={require('./ImportedIcons/mic.png')} style={{ height: 25, width: 28, marginLeft: 1, borderRadius: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "white", height: 30, width: 30, borderRadius: 50, marginTop: 5 }}>
                        <Image source={require('./ImportedIcons/dots.png')} style={{ height: 25, width: 28, marginLeft: 1 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "white", height: 30, width: 30, borderRadius: 50, marginTop: 5 }}>
                        <Image source={require('./ImportedIcons/share.png')} style={{ height: 25, width: 28, marginLeft: 1 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "white", height: 30, width: 30, borderRadius: 50, marginTop: 5 }}>
                        <Image source={require('./ImportedIcons/rightArrow.png')} style={{ height: 25, width: 25, marginLeft: 1, borderRadius: 10 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: "black", height: 80, width: 80, marginLeft: 250, marginTop: -200, borderRadius: 25 }}>

                </View>
            </ImageBackground>
            <View style={{ flexDirection: "row" }}>
                <View style={{
                    width: 120, height: 130, backgroundColor: "grey", marginLeft: 10, marginTop: 20, borderRadius: 25
                    , elevation: 2
                }}>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity style={{ width: 50, height: 50, borderRadius: 20, marginLeft: 10, marginTop: 5 }}>
                            <Image source={require('./images/moon.png')} />
                        </TouchableOpacity>
                        <View>
                            <Text style={{ fontWeight: "bold", fontSize: 11, color: "white" }}>9h 33m</Text>
                            <Text style={{ color: "white", fontSize: 11, fontWeight: "100" }}>time</Text>
                        </View>
                        {/* <FlatList horizontal renderItem={renderItem} data={data} style={{backgroundColor: "white"}} /> */}
                        <View style={{
                            backgroundColor: "grey", width: 100, marginTop: 40, height: 80, marginHorizontal: -92,
                            transform: [{ rotate: '180deg' }]
                        }}>
                            <FlatList horizontal renderItem={renderItem} data={data} />
                        </View>
                    </View>
                </View>
                <View style={{ width: 120, height: 120, backgroundColor: "grey", borderRadius: 80, marginLeft: 10, marginTop: 25 }}>
                    <View style={{
                        width: 100, height: 100, backgroundColor: "grey", borderRadius: 80, alignSelf: "center",
                        marginTop: 10, elevation: 10
                    }}>
                        <Image source={require('./images/heart.png')} style={{ height: 40, width: 45, marginLeft: 25, marginTop: 20 }} />
                        <Text style={{ color: "white", marginLeft: 20 }} >78 bpm</Text>
                    </View>
                </View>
                <View style={{ width: 120, height: 120, backgroundColor: "black", marginLeft: 10, marginTop: 30, borderRadius: 25 }}>
                    <Image source={image} style={{
                        width: 60, height: 60, alignSelf: "center", marginTop: 15,
                        borderRadius: 50
                    }} />
                    <Text style={{ color: "white", marginLeft: 48, marginTop: 16 }}>
                        XYZ
                    </Text>
                </View>
            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={{ width: 170, height: 95, backgroundColor: "grey", marginTop: 20, marginLeft: 10, borderRadius: 25, elevation: 5 }}>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require('./images/run.png')} style={{ marginLeft: 8, height: 15, width: 12, marginTop: 5 }} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontWeight: "bold", fontSize: 10, color: "white" }}>Running</Text>
                            <Text style={{ fontSize: 10, color: "white" }}>9070m</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 11, marginLeft: 90, marginTop: -27, color: "white" }}>18 Feb 2022</Text>
                    <Text style={{ fontSize: 12, marginLeft: 100, marginTop: 0, color: "white" }}>55:24 min</Text>
                    <View style={{ width: 180, height: 5, backgroundColor: "#393E46", marginTop: 8 }}>

                    </View>
                    <Text style={{ color: "#393E46", marginLeft: 4, marginTop: 5 }}>
                        Better than yesterday
                    </Text>
                </View>

                <View style={{ width: 200, height: 120, backgroundColor: "grey", marginTop: 20, marginLeft: 10, borderRadius: 25, elevation: 10 }}>
                    <Text style={{ color: "#00ADB5", fontWeight: "bold", marginLeft: 10, marginTop: 5, fontSize: 15 }}>Monthly Report</Text>
                    <Text style={{ color: "#00ADB5", marginLeft: 10, marginTop: 10, fontSize: 12 }}>task report</Text>
                    <Text style={{ color: "#00ADB5", fontWeight: "bold", marginLeft: 10, marginTop: 30, fontSize: 15 }} >
                        33%    59%</Text>
                    <View style={{
                        backgroundColor: "grey", width: 100, marginTop: -80, height: 80, marginHorizontal: 92,
                        transform: [{ rotate: '180deg' }]
                    }}>
                        <FlatList horizontal renderItem={renderItems} data={data} />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { backgroundColor: "#393E46", flex: 1 },
});