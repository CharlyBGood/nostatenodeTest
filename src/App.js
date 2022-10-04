import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
// import Form from "./components/Form";
import Table from "./components/Table";

import { useAuth0 } from "@auth0/auth0-react";
import Footer from "./components/Footer";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <h1>Iniciando sesión.....</h1>;
  return (
    <div className="App">
      <div className="nav-container">
        <Navbar />
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
      <Profile />
      <div className="container">
        {!isAuthenticated ? (
          "¡Por favor, inicia sesión para ver el contenido!"
        ) : (
          <Table />
        )}        
      </div>
      <Footer />
    </div>
  );
}

export default App;
