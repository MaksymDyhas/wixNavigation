import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { Navigation, NavigationFunctionComponent } from "react-native-navigation";
import Counter from "../components/Counter";

interface Props {
  name: "string";
}

const HomeScreen: NavigationFunctionComponent<Props> = (props) => {
  const goToScreen = () => {
    Navigation.push(props.componentId, {
      component: {
        name: "Profile", // Push the screen registered with the 'Settings' key
        options: {
          topBar: {
            title: {
              text: "Profile" // Set the TopBar title of the new Screen
            }
          }
        }
      }
    });
  };


  return (
    <View style={{ flex: 1, backgroundColor: "rgba(238,19,19,0.8)", justifyContent: "space-around" }}>
      <Counter />
      <TouchableHighlight
        style={styles.otherFontsForMask}
        onPress={goToScreen}>
        <View>
          <Text style={styles.textSemiBold}>Click to enter profile</Text>
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
    marginHorizontal: 20
  },
  textSemiBold: {
    fontSize: 30,
    color: "white",
    marginVertical: 4,
    textAlign: "center"
  }
});

HomeScreen.options = {
  topBar: {
    title: {
      text: "Home",
      color: "white"
    }
  }
};

export default HomeScreen;
