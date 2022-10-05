import "./App.css";
// import LoginButton from "./components/LoginButton";
// import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";

import { useAuth0 } from "@auth0/auth0-react";
import Footer from "./components/Footer";

function App() {
  const { isLoading } = useAuth0();
  const { isAuthenticated } = useAuth0();

  if (isLoading) return;
  <div className="container">
    <h1>Iniciando sesión.....</h1>;
  </div>;

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {!isAuthenticated ? (
          <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>          
        ) : (
          <Routes>
            <Route path="/" element={<Profile />} />
          </Routes>
        )}
        {/* <Routes>
          <Route path="/" element={<Profile />} />
        </Routes> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
