import { Link } from "react-router-dom";
import "../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="main-nav-bar">
      <Link to="/" className="router-link">
        Home
      </Link>
      <ul className="main-nav-links">
        <li>
          <Link to="/testingthings" className="router-link">
            Testing Things
          </Link>
        </li>
        <li>
          <Link to="/pagelayout" className="router-link">
            Page Layout
          </Link>
        </li>
        <li>placeholder</li>
        <li>placeholder</li>
      </ul>
    </nav>
  );
};
