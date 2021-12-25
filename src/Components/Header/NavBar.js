import React from "react";
import "./NavBar.css";
import Mainlogo from "../../Assets/Mainlogo.png";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" fixed="top" variant="dark">
        <Navbar.Brand>
          <Nav.Link href="logo">
            <img className="mainlogo" src={Mainlogo} alt="LETSBUILD" />
            <a href="letsbuild">
              <span>LETS BUILD</span>
            </a>
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="nav_">
          <Nav>
            <NavDropdown title="Login" className="nav_dropdown">
              <NavDropdown.Item href="/user">USER</NavDropdown.Item>
              <NavDropdown.Item href="/builder">BUILDER</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/signup" className="nav_signup">
              Sinup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
