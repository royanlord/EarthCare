import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginProvider from "./context/LoginProvider.jsx";
import UserProvider from "./context/UserProvider.jsx";
import ArticlesProvider from "./context/ArticlesProvider.jsx";
import EventsProvider from "./context/EventsProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <LoginProvider>
      <UserProvider>
        <ArticlesProvider>
          <EventsProvider>
            <App />
          </EventsProvider>
        </ArticlesProvider>
      </UserProvider>
    </LoginProvider>
  // </React.StrictMode>
);
