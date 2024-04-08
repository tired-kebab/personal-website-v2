import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar-container">
      <NavLink to="/" style={{ alignSelf: "center" }}>
        <img src="../../../public/logo.png" alt="logo" id="logo" />
      </NavLink>
      <ul className="navbar">
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <NavLink to="aboutme">About Me</NavLink>
        </li>
        <li>
          <NavLink to="projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="resume">Resume</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
