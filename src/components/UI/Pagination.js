import { useContext, useState } from "react";
import { Pagination } from "react-bootstrap";
import { SearchContext } from "../../store/search-context";

const PaginationBasic = () => {
  const { setPage, numberOfPages, loadedCategories } =
    useContext(SearchContext);

  const [currentPage, setCurrentPage] = useState(1);

  const limit = 7;

  // const setPageHandler = (event) => {
  //   event.preventDefault();
  //   setPage();
  //   console.log("Page number");
  // addKeyword("keywords", searchKeyword.current.value);
  //     urlCallback();
  // };

  function goToFirstPage() {
    setCurrentPage((page) => (page = 1));
  }

  function goToLastPage() {
    setCurrentPage((page) => (page = numberOfPages));
  }

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / limit) * limit;
    console.log("start", start);
    let paginationArray = [];
    if (start <= numberOfPages - limit) {
      paginationArray = new Array(limit).fill().map((_, idx) => {
        return start + idx + 1;
      });
    } else {
      paginationArray = new Array(numberOfPages - start)
        .fill()
        .map((_, idx) => {
          return start + idx + 1;
        });
    }
    return paginationArray;
  };

  return (
    <Pagination>
      <Pagination.First
        onClick={goToFirstPage}
        className={`first ${currentPage === 1 ? "disabled" : ""}`}
      />
      <Pagination.Prev
        onClick={goToPreviousPage}
        className={`prev ${currentPage === 1 ? "disabled" : ""}`}
      />

      {getPaginationGroup().map((item, index) => (
        <Pagination.Item
          key={index}
          onClick={changePage}
          className={`${currentPage === item ? "activePage" : null}`}
        >
          {item}
        </Pagination.Item>
      ))}

      <Pagination.Next
        onClick={goToNextPage}
        className={`next ${currentPage === numberOfPages ? "disabled" : ""}`}
      />
      <Pagination.Last
        onClick={goToLastPage}
        className={`last ${currentPage === numberOfPages ? "disabled" : ""}`}
      />
    </Pagination>
  );
};

export default PaginationBasic;
