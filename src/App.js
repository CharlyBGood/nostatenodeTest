import "./App.css";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
// import { BrowserRouter } from "react-router-dom";
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
    
    <div className="App">
      <Navbar />
      <BrowserRouter>
      
      {!isAuthenticated ? (
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      )}
      </BrowserRouter>
      <Footer />
    </div>
    
  );
}

export default App;
