import "./App.css";

// Import Images
import mainImg from "./img/navbar2.jpg";
import logo from "./img/logo.png";

// Import Components
import NavBar from "./Components/NavBar/NavBar.js";
import MainHeader from "./Components/MainHeader/MainHeader";

function App() {
  return (
    <div className="App">
      <NavBar logo={logo} />
      <MainHeader mainImg={mainImg} />
    </div>
  );
}

export default App;
