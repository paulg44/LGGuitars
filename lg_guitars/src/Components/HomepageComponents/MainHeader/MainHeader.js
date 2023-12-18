// Component for Main Header
import "./MainHeader.css";
import { FaGuitar } from "react-icons/fa";

function MainHeader({ mainImg }) {
  return (
    <section
      className="welcome-page"
      style={{ background: `url(${mainImg}) no-repeat center center/cover` }}
    >
      <div className="container">
        <div className="heading">
          <h1 className="section-title">
            LG <span className="text-third">G</span>uitars
          </h1>
          <p className="text-secondary">
            Custom made with quality craftmanship.
          </p>
          <div className="btn">
            <a href="#showcase">
              <i>
                <FaGuitar />
              </i>{" "}
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainHeader;
