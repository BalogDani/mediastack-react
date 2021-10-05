import { useContext, useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { SearchContext } from "../../store/search-context";

const PaginationBasic = () => {
  const { limit, numberOfPages, addKeyword, urlCallback } =
    useContext(SearchContext);

  const [offset, setOffset] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    addKeyword("offset", offset);
    // console.log("off: ", offset, "curPage: ", currentPage);
    urlCallback();
  }, [offset]);

  function goToFirstPage() {
    setCurrentPage((page) => (page = 1));
    setOffset((offset) => (offset = 0));
  }

  function goToLastPage() {
    setCurrentPage((page) => (page = numberOfPages));
    setOffset((offset) => (offset = Math.floor((numberOfPages - 1) * limit)));
  }

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
    setOffset((offset) => (offset = Math.floor(currentPage * limit)));
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
    setOffset((offset) => (offset = Math.floor((currentPage - 2) * limit)));
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
    setOffset((offset) => (offset = Math.floor((pageNumber - 1) * limit)));
  }

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / limit) * limit;
    let paginationArray;
    if (numberOfPages === 0) {
      paginationArray = [];
      return paginationArray;
    }
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

  const paginationArray = getPaginationGroup();
  let pagination;
  if (paginationArray.length === 0) {
    pagination = <></>;
  } else {
    pagination = (
      <Pagination>
        <Pagination.First
          onClick={goToFirstPage}
          className={`first ${currentPage === 1 ? "disabled" : ""}`}
        />
        <Pagination.Prev
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        />

        {paginationArray.map((item, index) => (
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
  }

  return pagination;
};

export default PaginationBasic;
