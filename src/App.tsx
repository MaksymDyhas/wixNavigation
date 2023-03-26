import React from "react";
import { SafeAreaView, StatusBar, Text } from "react-native";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {

  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text>Hello</Text>
        <StatusBar barStyle={"light-content"} backgroundColor={"#2247dd"} />
      </SafeAreaView>
    </Provider>
  );
}


export default App;
