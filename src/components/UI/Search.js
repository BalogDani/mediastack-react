import { useContext, useRef } from "react";
import { Form } from "react-bootstrap";
import { SearchContext } from "../../store/search-context";
import ButtonLayout from "../layout/ButtonLayout";
import "./Search.scss";

const Search = () => {
  const searchKeyword = useRef("");

  const { addKeyword, urlCallback } = useContext(SearchContext);

  const searchHandler = (event) => {
    addKeyword("keywords", searchKeyword.current.value);
    urlCallback();
    searchKeyword.current.value = "";
  };

  return (
    <>
      <div>
        <Form.Control
          type="text"
          placeholder="Search here..."
          className="search"
          ref={searchKeyword}
        />
      </div>
      <div>
        <ButtonLayout>
          <button className="class" onClick={searchHandler}>
            Submit
          </button>
        </ButtonLayout>
      </div>
    </>
  );
};

export default Search;
