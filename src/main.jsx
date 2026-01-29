import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "remixicon/fonts/remixicon.css";

import { ThemeProvider } from "../src/context/ThemeContext";
import ScrollToTop from "./components/ScrollToTop";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
     <ScrollToTop />
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);