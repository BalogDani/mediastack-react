import { useCallback, useContext, useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import CategoryList from "../components/categories/CategoryList";
import { SearchContext } from "../store/search-context";
import "./CategoryPage.scss";

const CategoryPage = (props) => {
  const { addKeyword, isLoading, loadedCategories, error } =
    useContext(SearchContext);

  // const [isLoading, setIsLoading] = useState(true);
  // const [loadedCategories, setLoadedCategories] = useState([]);

  // const [error, setError] = useState(null);

  const urlCallback = useCallback(() => {
    //   setIsLoading(true);
    //   setError(null);
    console.log("CategoryPage");
    addKeyword("categories", props.category);
    //   try {
    //     const response = await fetch(url);
    //     // console.log(url);

    //     if (!response.ok) {
    //       throw new Error("Something went wrong! ");
    //     }

    //     const data = await response.json();
    //     console.log(data);

    //     const categories = [];

    //     for (const key in data) {
    //       const category = {
    //         ...data[key],
    //       };
    //       categories.push(category);
    //     }

    //     setIsLoading(false);
    //     setLoadedCategories(categories);
    //   } catch (error) {
    //     setError(error.message);
    //   }
    //   setIsLoading(false);
  }, [props.category]);

  useEffect(() => {
    urlCallback();
  }, [urlCallback]);

  if (error) {
    // return (
    //   <>
    //     <br />
    //     <p>{error}</p>               // Error handling must to be finished later
    //   </>
    // );
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
