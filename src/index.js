import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { Auth0Provider } from "@auth0/auth0-react";
// import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import { Route, Routes } from "react-router-dom";

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clienId = process.env.REACT_APP_AUTH0_CLIENT_ID

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routes>

    
    <Route path="/" element={<Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>}>
      {/* <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory> */}

      {/* <Auth0ProviderWithHistory>
    <App />
    </Auth0ProviderWithHistory>
    </BrowserRouter> */}
    </Route>
    </Routes>
  </React.StrictMode>
);
