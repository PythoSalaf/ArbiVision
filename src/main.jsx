import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import { AppKitProvider } from "@reown/appkit/react";
import { arbitrum } from "@reown/appkit/networks";
import { PrivyProvider } from "@privy-io/react-auth";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
        <PrivyProvider appId="cmjtvdlpa001jl40bz8qtj1ru">
          <App />
        </PrivyProvider>
    </Provider>
  </StrictMode>
);
