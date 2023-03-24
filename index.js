import { Navigation } from "react-native-navigation";

import Profile from "./src/screens/Profile";
import HomeScreen from "./src/screens/HomeScreen";
import ThirdPage from "./src/screens/ThirdPage";

Navigation.registerComponent("WelcomeScreen", () => HomeScreen);
Navigation.registerComponent("Profile", () => Profile);
Navigation.registerComponent("ThirdPage", () => ThirdPage);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: "WelcomeScreen",
            },
          },
        ],
      },
    },
  });
});

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: "#2247dd",
  },
  topBar: {
    title: {
      color: "white",
    },
    backButton: {
      color: "white",
    },
    background: {
      color: "#2247dd",
    },
  },
});
