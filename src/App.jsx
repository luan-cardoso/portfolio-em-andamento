import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/index.jsx";
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <Router> {/* Agora o Router engloba tudo */}
      <React.StrictMode>
        <Nav />
        <AppRoutes />
      </React.StrictMode>
    </Router>
  );
};

export default App;
