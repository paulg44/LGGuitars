import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Import Pages
import Home from "./pages/Homepage/Homepage";
import Process from "./pages/Progress/Progress";
import Contact from "./pages/Contact/Contact";

// ABLE TO DEPLOY FROM COOMAND LINE TO NETLIFY BUT NEED TO SORT ROUTE PATHS ETC AS PAGES NOT SHOWING CORRECT OR AT ALL!!!!

function App() {
  function LocationProvider({ children }) {
    return <AnimatePresence>{children}</AnimatePresence>;
  }

  function RoutesWithAnimation() {
    const location = useLocation();
    console.log(location);
    return (
      <Routes location={location} key={location}>
        <Route path="/" element={<Home />} />
        <Route path="/process-page" element={<Process />} />
        <Route path="/contact-page" element={<Contact />} />
      </Routes>
    );
  }

  return (
    <BrowserRouter className="App">
      <LocationProvider>
        <RoutesWithAnimation />
      </LocationProvider>
    </BrowserRouter>
  );
}

export default App;
