import { Navigation } from "react-native-navigation";

import Profile from "./src/screens/Profile";
import HomeScreen from "./src/screens/HomeScreen";
import ThirdPage from "./src/screens/ThirdPage";
import { withNavigationProvider } from "react-native-navigation-hooks";
import WrapScreen from "./src/config/routes";
import store from "./src/redux/store";

Navigation.registerComponent("WelcomeScreen", () => withNavigationProvider(WrapScreen(HomeScreen, store)) , () => HomeScreen);
Navigation.registerComponent("Profile", () => withNavigationProvider(WrapScreen(Profile, store)) , () => Profile);
Navigation.registerComponent("ThirdPage", () => withNavigationProvider(WrapScreen(ThirdPage, store)) , () => ThirdPage);

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
