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
        <Route path="/lg_guitars/src/pages/Progress" element={<Process />} />
        <Route path="/lg_guitars/src/pages/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <NavBar logo={logo} />
    //   <MainHeader mainImg={mainImg} />
    //   <GuitarCardContainer
    //     guitarOne={guitarOne}
    //     guitarTwo={guitarTwo}
    //     guitarThree={guitarThree}
    //     guitarFour={guitarFour}
    //     bassOne={bassOne}
    //     bassTwo={bassTwo}
    //   />
    //   <Footer />
    // </div>
  );
}

export default App;
