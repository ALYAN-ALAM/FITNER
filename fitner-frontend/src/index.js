import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react';
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithAuth0 } from "convex/react-auth0";

const convex = new ConvexReactClient('https://amiable-dodo-916.convex.cloud');
const authDomain = process.env.REACT_APP_AUTH0_DOMAIN
const authClientId = process.env.REACT_APP_AUTH0_APP_ID
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
 <Auth0Provider
    domain={authDomain}
    clientId={authClientId}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <ConvexProviderWithAuth0 client={convex}>
        <App />
      </ConvexProviderWithAuth0>
  </Auth0Provider>
  </React.StrictMode>
);
