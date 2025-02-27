import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import AppRoutes from "./routes/index.jsx";
import Nav from "./components/Nav/Nav";
import Loading from "./components/Loading/Loading.jsx";

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <PageWrapper key={location.pathname}>
        <AppRoutes />
      </PageWrapper>
    </AnimatePresence>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula um carregamento inicial de 3 segundos
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Router>
      <React.StrictMode>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Nav />
            <AnimatedRoutes />
          </>
        )}
      </React.StrictMode>
    </Router>
  );
};

export default App;
