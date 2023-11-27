import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import SocketProvider from "./contexts/socketProvider.tsx";
import UserProvider from "./contexts/userProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <SocketProvider>
    <BrowserRouter>
      <UserProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </UserProvider>
    </BrowserRouter>
  </SocketProvider>
);
