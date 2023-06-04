// Component for Navbar
import "./NavBar.css";

function NavBar({ logo }) {
  return (
    <nav className="navbar">
      <a href="index.html">
        <img src={logo} alt="logo" className="logo"></img>
      </a>
      <div className="links">
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="process.html">Process</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
