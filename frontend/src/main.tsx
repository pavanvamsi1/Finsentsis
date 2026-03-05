import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
 develop
HEAD
import "./index.css";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
 main
  </React.StrictMode>
);

import "./index.css";
import { AuthProvider } from "./context/AuthProvider"; // ✅ add this

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>   {/* ✅ wrap App */}
      <App />
    </AuthProvider>
  </React.StrictMode>
);
 main
