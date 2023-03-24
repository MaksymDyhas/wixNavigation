import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { Navigation } from "react-native-navigation";

const Profile = (props) => {
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
    <SafeAreaView style={{ flex: 1, justifyContent: "center", paddingHorizontal: 15, backgroundColor: "#dc3d3d" }}>
      <View style={styles.topOfPage}>
        <View style={styles.forPhoto}>
          <View style={styles.photo} />
        </View>
        <View style={styles.forInfo}>
          <View style={styles.nameAndSurname}>
            <Text style={styles.name}>Maksym</Text>
          </View>
          <View style={styles.nameAndSurname}>
            <Text style={styles.name}>Dyhas</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomOfPage}>
        <Text style={styles.labelBio}>BIOGRAPHY</Text>
        <TouchableHighlight style={styles.bio}
        onPress={()=>goToScreen('ThirdPage')}
        >
          <Text style={styles.aboutInBio}>Next page</Text>
        </TouchableHighlight>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    topOfPage: {
      flex: 1,
      flexDirection:
        "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    forPhoto: {
      width: 150,
      height: 150,
      borderRadius: 90,
      borderWidth: 3,
      borderColor: "rgb(250,250,250)",
      justifyContent: "center",
      alignItems: "center",
    },
    photo: {
      marginTop: 3,
      width: 140,
      height: 140,
      borderRadius: 70,
    },
    forInfo: {
      flex: 1,
      height: 150,
      marginLeft: 20,
      justifyContent: "center",
    },
    nameAndSurname: {
      marginVertical: 10,
      padding: 5,
      borderBottomWidth: 1,
      borderColor: "#1e1c1c",
    },
    name: {
      fontSize: 18,
      fontWeight: "400",
      color: "#f5f2c2",
    },
    bottomOfPage: {
      flex: 2,
    },
    labelBio: {
      marginBottom: 10,
      fontSize: 22,
      fontFamily: "EduNSWACTFoundation-Bold",
      color: "#f5f2c2",
      textAlign: "center",
    },
    bio: {
      borderWidth: 2,
      borderColor: "#d2d0d0",
      borderRadius: 20,
      marginTop: 20,
      backgroundColor: "rgb(17,17,17)",
      padding: 20,
    },
    aboutInBio: {
      fontSize: 26,
      fontFamily: "EduNSWACTFoundation-Medium",
      color: "#f5f2c2",
      textAlign: "center",
    },

  },
);

Profile.options = {
  topBar: {
    title: {
      text: "Profile",
    },
  },
  bottomTab: {
    text: "Profile",
  },
};


export default Profile;
