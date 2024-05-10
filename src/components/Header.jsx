import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header>
      <div className="header-div">
        <h1>NC News</h1>
        <div className="header-logo-div">
          <FontAwesomeIcon
            icon={faMugHot}
            style={{ color: "purple" }}
            className="fa-3x"
          />
        </div>
      </div>
      <div className="home-div">
        <Link to="/">Home</Link>
      </div>
    </header>
  );
}
