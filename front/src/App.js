import { Fragment } from "react";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  const { user, loginWithRedirect, isAuthenticated, isLoading, logout } =
    useAuth0();

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Fragment>
  );
}

export default App;
