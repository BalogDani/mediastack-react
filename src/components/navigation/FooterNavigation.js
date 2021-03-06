import { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import OrderBy from "../UI/OrderBy";
import PaginationBasic from "../UI/Pagination";
import "./FooterNavigation.scss";

const FooterNavigation = () => {
  const [navDropdownIsOpen, setNavDropdownIsOpen] = useState(false);

  const handleOpen = () => {
    setNavDropdownIsOpen(true);
  };

  const handleClose = () => {
    setNavDropdownIsOpen(false);
  };

  return (
    <Navbar bg="dark" variant="dark" fixed="bottom">
      <Container className="justify-content-center">
        <Nav>
          <NavDropdown
            title="Sort articles by date of publish"
            id="basic-nav-dropdown"
            menuVariant="dark"
            className="dropup"
            onMouseEnter={handleOpen}
            // onMouseLeave={handleClose}
            show={navDropdownIsOpen}
          >
            <div onMouseLeave={handleClose}>
              <OrderBy by="Descendening" sort="published_desc" />
              <NavDropdown.Divider />
              <OrderBy by="Ascendening" sort="published_asc" />
            </div>
          </NavDropdown>
          <Nav.Item className="pagination">
            <PaginationBasic />
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default FooterNavigation;
