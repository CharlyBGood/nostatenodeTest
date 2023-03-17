import React from "react";
import { useNavigate } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { Route } from "react-router-dom";

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  const navigate = useNavigate();

  const onRedirectCallback = (appState) => {    
    // navigate.push(appState?.returnTo || window.location.pathname);
    navigate.push(appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.href = "/Profile")
    console.log("going through")
  };

  return (
    <Route>

    
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
    </Route>
  );
};

export default Auth0ProviderWithHistory;
