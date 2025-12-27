import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import {AppKitProvider} from "@reown/appkit/react"
import {arbitrum} from '@reown/appkit/networks'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AppKitProvider 
        projectId="578373c30b36d380439638fc0d9aca10" 
        networks={[arbitrum]}
        >
      <App />
      </AppKitProvider>
    </Provider>
  </StrictMode>
);
