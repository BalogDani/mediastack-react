import { useContext, useRef } from "react";
import { Form } from "react-bootstrap";
import { SearchContext } from "../../store/search-context";
import ButtonLayout from "../layout/ButtonLayout";
import "./Search.scss";

const Search = () => {
  const searchKeyword = useRef("");

  const { addKeyword, urlCallback } = useContext(SearchContext);

  const searchHandler = () => {
    addKeyword("keywords", searchKeyword.current.value);
    urlCallback();
    searchKeyword.current.value = "";
  };

  const searchOnEnter = (event) => {
    if (event.key === "Enter") {
      searchHandler();
    }
  };

  return (
    <>
      <div>
        <Form.Control
          type="text"
          placeholder="Search here..."
          className="search"
          ref={searchKeyword}
          onKeyPress={searchOnEnter}
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
