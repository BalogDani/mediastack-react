import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import OrderBy from "../UI/OrderBy";
import PaginationBasic from "../UI/Pagination";
import "./FooterNavigation.scss";

const FooterNavigation = (props) => {
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom">
      <Container className="justify-content-center">
        <Nav>
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
          <Nav.Item className="pagination">
            <PaginationBasic />
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default FooterNavigation;
