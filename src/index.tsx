/* eslint-disable linebreak-style */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "@fontsource/poppins";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      contrastText: "#4F2D80",
    },
    secondary: {
      main: "#4F2D80",
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    fontSize: 18,
    fontFamily: ["Poppins", "Segoe UI", "Roboto"].join(","),
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
