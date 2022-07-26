import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <h1>Loading........</h1>;
  return (
    <div className="App">
      <div className="header-nav">
        <h1>NoStateNode</h1>
        <div className="logo-loggin">
          <img
            className="logo-img"
            src="https://no-state-node.herokuapp.com/icons/lunaticoin.png"
            alt="nostatenode logo"
          />
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </div>
      </div>
      <Profile />
    </div>
  );
}

export default App;
