import { Link } from "react-router-dom";
import "./header.styles.scss";

const Header = () => {
  return (
    <nav className="nav-container">
      <Link to={"/"} className="link">
        <h1>ToDo App</h1>
      </Link>
      <ul>
        <li>
          <Link to={"/"} className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/add"} className="link">
            Add ToDo
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
