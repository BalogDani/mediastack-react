import { useContext } from "react";
import { SearchContext } from "../../store/search-context";

const OrderBy = (props) => {
  const { addKeyword, urlCallback } = useContext(SearchContext);

  const searchHandler = (event) => {
    event.preventDefault();
    console.log("succ");
    addKeyword("sort", props.sort);
    urlCallback();
  };
  return (
    <>
      <button className="orderBy" onClick={searchHandler}>
        {props.by}
      </button>
    </>
  );
};

export default OrderBy;
