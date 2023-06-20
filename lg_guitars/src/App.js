import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Pages
import Home from "./pages/Homepage/Homepage";
import Process from "./pages/Progress/Progress";
import Contact from "./pages/Contact/Contact";

// ABLE TO DEPLOY FROM COOMAND LINE TO NETLIFY BUT NEED TO SORT ROUTE PATHS ETC AS PAGES NOT SHOWING CORRECT OR AT ALL!!!!

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/process-page" element={<Process />} />
        <Route path="/contact-page" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
