import { useContext, useEffect } from "react";
import { Card, Spinner } from "react-bootstrap";
import CategoryList from "../components/categories/CategoryList";
import { SearchContext } from "../store/search-context";
import "./CategoryPage.scss";

const CategoryPage = (props) => {
  const { addKeyword, isLoading, loadedCategories, error, urlCallback } =
    useContext(SearchContext);

  useEffect(() => {
    addKeyword("categories", props.category);
    urlCallback();
  }, []);

  // Error handling must to be finished later
  if (error) {
    return (
      <>
        <br />
        <p>{error}</p>
      </>
    );
  }

  if (isLoading) {
    return (
      <section>
        <br />
        <br />
        <Spinner
          as="span"
          animation="grow"
          role="status"
          variant="dark"
          aria-hidden="true"
          className="column"
        />
        <h3 className="column plus">Loading...</h3>
      </section>
    );
  }

  const headerTitle = (props) => {
    return props.charAt(0).toUpperCase() + props.slice(1);
  };

  return (
    <>
      <section>
        <br />
        <Card
          border="dark border-2 rounded"
          style={{ width: "auto" }}
          bg="dark"
          text="white"
          className="p-2 bg-dark headerMargin"
        >
          <Card.Header>
            <h1>{headerTitle(props.category)}</h1>
          </Card.Header>
        </Card>
        <br />
        <CategoryList categories={loadedCategories} />
      </section>
    </>
  );
};

export default CategoryPage;
