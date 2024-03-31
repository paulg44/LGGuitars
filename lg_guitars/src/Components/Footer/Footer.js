/* Component for Footer */
import "./footer.css";

function Footer() {
  return (
    <footer className="footer" testid="footer">
      <div className="footer-content">
        <p>
          LG <span className="text-third">G</span>uitars Copyright &copy; 2022
          All Rights Reserved
        </p>
        <p className="web">Website designed & created by PG Design</p>
      </div>
    </footer>
  );
}

export default Footer;
