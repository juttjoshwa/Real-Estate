import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-0mtmbyjhndjgk5tp.us.auth0.com"
    clientId="491NZ2IALGG47nI9NqSV1xTzTqGZJics"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
          <Toaster />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </Auth0Provider>
);
