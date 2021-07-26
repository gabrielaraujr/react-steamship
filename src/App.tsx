import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/auth";

import Routes from "routes";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}
