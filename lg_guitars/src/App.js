import "./App.css";

// Import Images
import mainImg from "./img/navbar2.jpg";
import logo from "./img/logo.png";
import guitarOne from "./img/guitar8.jpg";
import guitarTwo from "./img/guitar4.jpg";
import guitarThree from "./img/guitar2 (2).jpg";
import guitarFour from "./img/guitar10.jpg";
import bassOne from "./img/basstest2.jpg";
import bassTwo from "./img/bass2.jpg";

// Import Components
import NavBar from "./Components/NavBar/NavBar.js";
import MainHeader from "./Components/MainHeader/MainHeader";
import GuitarCardContainer from "./Components/GuitarCardContainer/GuitarCardContainer";

function App() {
  return (
    <div className="App">
      <NavBar logo={logo} />
      <MainHeader mainImg={mainImg} />
      <GuitarCardContainer
        guitarOne={guitarOne}
        guitarTwo={guitarTwo}
        guitarThree={guitarThree}
        guitarFour={guitarFour}
        bassOne={bassOne}
        bassTwo={bassTwo}
      />
    </div>
  );
}

export default App;
