import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={`${process.env.PUBLIC_URL}/muz-react`}>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
