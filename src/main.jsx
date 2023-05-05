import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { storeApi } from "./redux/API.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider api={storeApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
