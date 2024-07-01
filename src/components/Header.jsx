import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <div className="header-div">
          <h1>NC News</h1>
          <div className="header-logo-div">
            <FontAwesomeIcon
              icon={faMugHot}
              style={{ color: "#836faa" }}
              className="fa-3x"
            />
          </div>
        </div>
      </Link>
      <div className="home-div">
        <Link to="/">Home</Link>
      </div>
    </header>
  );
}
