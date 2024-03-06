import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react';
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithAuth0 } from "convex/react-auth0";

const convex = new ConvexReactClient('https://amiable-dodo-916.convex.cloud');
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
 <Auth0Provider
    domain="dev-3kvo8gurvbtg3koc.us.auth0.com"
    clientId="XynpbD6SS2nKJqUiWpwNHdM3cn1qOLNf"
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
