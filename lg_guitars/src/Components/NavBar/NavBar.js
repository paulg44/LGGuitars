// Component for Navbar
import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" className="logo"></img>
      </Link>
      <div className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/process-page">Process</Link>
          </li>
          <li>
            <Link to="/contact-page">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
