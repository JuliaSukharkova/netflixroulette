import React from "react";
import "../node_modules/normalize.css/normalize.css";
import { MainRoutes } from "./routes/MainRoutes";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <MainRoutes />
    </Provider>
  );
}

export default App;
