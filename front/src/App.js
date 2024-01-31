import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  console.log(user);
  return (
    <div className="App">
      <button onClick={(e) => loginWithRedirect()}> login with redirect</button>
    </div>
  );
}

export default App;
