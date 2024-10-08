import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Route.jsx";
import "./index.css";
import "./App.css";
import AuthContextProvider from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </StrictMode>
);
