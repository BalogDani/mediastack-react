import { useContext, useState } from "react";
import { Pagination } from "react-bootstrap";
import { SearchContext } from "../../store/search-context";

const PaginationBasic = () => {
  const { setPage, numberOfPages, loadedCategories } =
    useContext(SearchContext);

  const setPageHandler = (event) => {
    event.preventDefault();
    setPage();
    console.log("Page number");
  };

  // const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  const limit = 10;

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

  // const getPaginatedData = () => {
  //   const startIndex =
  //     currentPage * loadedCategories[0].limit - loadedCategories[0].limit;
  //   const endIndex = startIndex + loadedCategories[0].limit;
  //   return data.slice(startIndex, endIndex);
  // };

  const getPaginationGroup = () => {
    let start =
      Math.floor((currentPage - 1) / limit) *
      // loadedCategories[0].limit;
      limit;
    return new Array(limit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <Pagination>
      {/* <Pagination.First /> */}
      <Pagination.Prev
        onClick={goToPreviousPage}
        className={`prev ${currentPage === 1 ? "disabled" : ""}`}
      />
      {/* <Pagination.Ellipsis /> */}

      {getPaginationGroup().map((item, index) => (
        <Pagination.Item
          key={index}
          onClick={changePage}
          className={`${currentPage === item ? "activePage" : null}`}
        >
          {item}
        </Pagination.Item>
      ))}

      {/* <Pagination.Ellipsis /> */}
      <Pagination.Next
        onClick={goToNextPage}
        className={`next ${currentPage === limit ? "disabled" : ""}`}
      />
    </Pagination>
  );
};

export default PaginationBasic;
