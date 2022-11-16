import "./navbar.scss";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Navbar = ({ colorModes, darkmode, setDarkmode }) => {
  return (
    <>
      <header
        className={
          darkmode ? ` mainNavbar navbarDark` : ` mainNavbar navbarLight`
        }
      >
        <Button
          variant="secondary"
          onClick={() => {
            setDarkmode(!darkmode);
          }}
        >
          {darkmode ? "☀️" : "🌙"}
        </Button>

        <h1 id="portfolioTitle">Portfolio</h1>

        <ul id="navLinks">
          <Button variant={colorModes()}>
            <Link to="/">
              <li>Home</li>
            </Link>
          </Button>

          <Button variant={colorModes()}>
            <Link to="/Projects">
              <li>Projects</li>
            </Link>
          </Button>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
