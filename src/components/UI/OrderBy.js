import { useContext } from "react";
import { SearchContext } from "../../store/search-context";
import ButtonLayout from "../layout/ButtonLayout";

const OrderBy = (props) => {
  const { addKeyword } = useContext(SearchContext);

  const searchHandler = (event) => {
    event.preventDefault();
    console.log("succ");
    addKeyword("sort", props.sort);
    // searchKeyword.current.value = "";
  };
  return (
    <>
      {/* <ButtonLayout> */}
      <button className="orderBy" onClick={searchHandler}>
        {props.by}
      </button>
      {/* </ButtonLayout> */}
    </>
  );
};

export default OrderBy;
