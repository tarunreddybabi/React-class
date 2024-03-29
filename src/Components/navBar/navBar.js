import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataShare } from "../../navigationStack/navigation";

const NavBar = () => {

 const sharedContext =useContext(DataShare)
 const {name}=sharedContext

  const link = {
    textDecoration: "none",
    color: "gold",
    padding: "5px",
    backgroundColor: "#282c34",
  };

  const listStyle = {
    margin: 5,
  };
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item" style={listStyle}>
            <Link to="/" style={link}>
              {name}/Home
            </Link>
          </li>
          <li className="nav-item" style={listStyle}>
            <Link to="/setting" style={link}>
              Settings
            </Link>
          </li>
          <li className="nav-item" style={listStyle}>
            <Link to="/about" style={link}>
              About
            </Link>
          </li>
          <li className="nav-item" style={listStyle}>
            <Link to="/products" style={link}>
              Products
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
