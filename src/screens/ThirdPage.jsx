import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

import { Navigation } from "react-native-navigation";


const HomeScreen = (props) => {
  const goToScreen = (screenName) => {
    Navigation.push(props.componentId, {
      component: {
        name: screenName, // Push the screen registered with the 'Settings' key
        options: {
          topBar: {
            title: {
              text: screenName, // Set the TopBar title of the new Screen
            },
          },
        },
      },
    })
  };


  return (
    <View style={{ flex: 1, backgroundColor: "rgba(238,19,19,0.8)", justifyContent: "center" }}>
      <TouchableHighlight
        style={styles.otherFontsForMask}
        onPress={()=>Navigation.pop(props.componentId)}>
        <View>
          <Text style={styles.textSemiBold}>Back</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.otherFontsForMask}
        onPress={()=>Navigation.popToRoot(props.componentId)}>
        <View>
          <Text style={styles.textSemiBold}>Home</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  otherFontsForMask: {
    backgroundColor: "#131111",
    borderRadius: 15,
    borderWidth: 2,
    padding: 10,
    borderColor: "white",
    margin: 20,
  },
  textSemiBold: {
    fontSize: 30,
    color: "white",
    marginVertical: 4,
    textAlign: "center",
  },
});


export default HomeScreen;
