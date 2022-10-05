import React from "react";
import "../stylesheets/Navbar.css";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";


function Navbar() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="nav-container">
      <nav className="navbar-logos">
        <a href="/">
          <h1>NoStateNode</h1>
        </a>
        <img
          className="logo-img"
          src={require("../img/horsecoin.png")}
          alt="nostatenode horse logo"
        />
      </nav>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </div>
  );
}

export default Navbar;
