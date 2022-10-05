import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../stylesheets/Profile.css";
import Table from "./Table";
// import Welcome from "./Welcome";
// import JSONPretty from "react-json-pretty";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <>
        <div className="profile-container">
          {/* <img className="header-img" src={user.picture} alt={user.name} /> */}
          <h2>¡Hola, {user.name}, comienza organizando recursos!</h2>
          {/* <p>Iniciaste sesión con este correo: {user.email}</p> */}

          {/* <JSONPretty className="json-div" data={user} /> */}
        </div>        
        <div className="container">
          {/* {!isAuthenticated ? <Welcome /> : <Table />} */}
          <Table />
        </div>
      </>
    )
  );
};

export default Profile;
