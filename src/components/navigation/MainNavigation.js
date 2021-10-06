import logo from "../../logo.svg";

import classes from "./MainNavigation.module.scss";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Search from "../UI/Search";
import { useState } from "react";

const MainNavigation = () => {
  const [navDropdownIsOpen, setNavDropdownIsOpen] = useState(false);

  const handleOpen = () => {
    setNavDropdownIsOpen(true);
  };

  const handleClose = () => {
    setNavDropdownIsOpen(false);
  };

  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand
        // href="/"
        >
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className={`d-inline-block align-top ${classes.appLogo}`}
          />{" "}
          News
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto left">
            <NavDropdown
              title="Categories"
              id="basic-nav-dropdown"
              menuVariant="dark"
              onMouseEnter={handleOpen}
              onMouseLeave={handleClose}
              show={navDropdownIsOpen}
            >
              <NavDropdown.Item href="/technology">Technology</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/sports">Sports</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Search className="right" />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
