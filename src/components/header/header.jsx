import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <Link to={"/"}>
          <h1>ToDo App</h1>
        </Link>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/add"}>Add ToDo</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
