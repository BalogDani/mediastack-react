import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import OrderBy from "../UI/OrderBy";

const FooterNavigation = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Nav className="me-auto left">
          <NavDropdown
            title="Sort articles by date of publish"
            id="basic-nav-dropdown"
            menuVariant="dark"
            className="dropup"
          >
            <NavDropdown.Item>
              <OrderBy by="Descendening" sort="published_desc" />
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <OrderBy by="Ascendening" sort="published_asc" />
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default FooterNavigation;
