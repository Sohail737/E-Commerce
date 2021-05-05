import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SetupMockServer from "./api/mock.server";
import { CartAndWishlistProvider } from "./context/CartAndWishlistProvider";
import { FilterProvider } from "./context/FilterProvider";
import { ProgressStateProvider } from "./context/ProgressStateProvider";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastProvider } from "./context/ToastProvider";

// SetupMockServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartAndWishlistProvider>
        <FilterProvider>
          <ProgressStateProvider>
            <ToastProvider>
              <App />
            </ToastProvider>
          </ProgressStateProvider>
        </FilterProvider>
      </CartAndWishlistProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
