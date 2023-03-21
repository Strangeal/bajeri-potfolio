import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "'Roboto Mono', monospace",
  },
  breakpoints: {
    values: {
      xxs: 0,
      xs: 480,
      sm: 600,
      md: 768,
      mmd: 900,
      lg: 1024,
      xl: 1280,
      "2xl": 1440,
      "3xl": 1536,
    },
  },
  palette: {
    primary: {
      main: "#8892af",
      light: "#64ffda",
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
