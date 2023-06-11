// Component for Navbar
import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/lg_guitars/src/pages/Homepage">
        <img src={logo} alt="logo" className="logo"></img>
      </Link>
      <div className="links">
        <ul>
          <li>
            <Link to="/lg_guitars/src/pages/Homepage">Home</Link>
          </li>
          <li>
            <Link to="/lg_guitars/src/pages/Progress">Process</Link>
          </li>
          <li>
            <Link to="/lg_guitars/src/pages/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
