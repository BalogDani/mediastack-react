import { useContext } from "react";
import { NavDropdown } from "react-bootstrap";
import { SearchContext } from "../../store/search-context";

const OrderBy = (props) => {
  const { addKeyword, urlCallback } = useContext(SearchContext);

  const searchHandler = (event) => {
    event.preventDefault();
    addKeyword("sort", props.sort);
    urlCallback();
  };
  return (
    <>
      <NavDropdown.Item onClick={searchHandler}>{props.by}</NavDropdown.Item>
    </>
  );
};

export default OrderBy;
