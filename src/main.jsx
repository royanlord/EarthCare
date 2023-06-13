import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginProvider from "./context/LoginProvider.jsx";
import UserProvider from "./context/UserProvider.jsx";
import ArticlesProvider from "./context/ArticlesProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <LoginProvider>
      <UserProvider>
        <ArticlesProvider>
          <App />
        </ArticlesProvider>
      </UserProvider>
    </LoginProvider>
  // </React.StrictMode>
);
