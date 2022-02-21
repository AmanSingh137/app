import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";
import TopHeader from "./components/TopHeader";
import PlanHistory from "./screens/PlanHistory";
import ClientHistory from "./screens/ClientHistory";


export default function Screen({ navigation }) {
  return (
    <View style={styles.container}>
      <TopHeader navigation={navigation} />
      <ScrollView>
        <Text style={styles.text}>Hi User!</Text>
        <Text
          style={{
            marginLeft: 20,
            color: "white",
            fontSize: 16,
            marginBottom: 30,
          }}
        >
          Welcome to{" "}
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 16 }}>
            Sporty.
          </Text>
        </Text>
        <Text
          style={{
            marginLeft: 20,
            fontSize: 28,
            color: "white",
            fontWeight: "bold",
            marginTop: -12,
          }}
        >
          Plans
        </Text>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            width: 360,
            marginLeft: 24,
            marginTop: 10,
          }}
        />
        {/* <FirstEmpty /> Screen 1 */}
        <PlanHistory navigation={navigation} />
        <TouchableOpacity style={styles.buttonStyling}>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
              marginLeft: 90,
              textShadowColor: "#000",
              textShadowOffset: { width: 1, height: 1 },
              textShadowRadius: 1,
            }}
          >
            More plans
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            marginLeft: 20,
            fontSize: 28,
            color: "white",
            fontWeight: "bold",
            marginTop: -12,
          }}
        >
          Recent Clients
        </Text>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            width: 360,
            marginLeft: 24,
            marginTop: 10,
          }}
        />
        <ClientHistory navigation={navigation} />
        <TouchableOpacity
          style={{
            backgroundColor: "#00ADB566",
            flex: 1,
            height: 40,
            marginHorizontal: 60,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 30,
            shadowColor: "black",
            elevation: 8,
            marginTop: -20,
            marginBottom: 10
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
              textShadowColor: "#000",
              textShadowOffset: { width: 1, height: 1 },
              textShadowRadius: 1,
            }}
          >
            All Clients
          </Text>
        </TouchableOpacity>
      </ScrollView>
     

    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#393E46", flex: 1, },
  text: { color: "white", marginTop: 0, marginLeft: 20, fontSize: 20 },
  buttonStyling: {
    backgroundColor: "#00ADB566",
    flex: 1, 
    height: 40,
    marginHorizontal: 60,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 30,
    shadowColor: "black",
    elevation: 8,
    marginBottom: 40,
  },
});
