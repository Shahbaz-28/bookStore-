import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Auth from "./context/Auth.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Auth>
      <div className="bg-white text-black dark:bg-slate-900 dark:text-white">
        <App />
      </div>
    </Auth>
  </BrowserRouter>
);
