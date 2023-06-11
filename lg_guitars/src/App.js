import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Pages
import Home from "./pages/Homepage/Homepage";
import Process from "./pages/Progress/Progress";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <h1>Test</h1>
        <Route path="/lg_guitars/src/pages/Homepage" element={<Home />} />
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
