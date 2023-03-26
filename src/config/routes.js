import React from "react";
import { Provider } from "react-redux";


const WrapScreen = (ReduxScreen, store) => props => {
  return (
    <Provider store={store}>
      <ReduxScreen {...props} />
    </Provider>
  );
};

export default WrapScreen;
