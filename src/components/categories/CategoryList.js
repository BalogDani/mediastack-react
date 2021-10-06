import { useContext } from "react";
import { Card } from "react-bootstrap";
import { SearchContext } from "../../store/search-context";
import CategoryItem from "./CategoryItem";
import "./CategoryList.scss";

const CategoryList = (props) => {
  const { keyword } = useContext(SearchContext);

  let data;
  if (typeof props.categories[1] !== "undefined") {
    data = props.categories[1];
  }

  let categoryList;
  if (
    typeof data === "undefined" ||
    (typeof data === "object" && Object.keys(data).length === 0)
  ) {
    categoryList = (
      <Card
        border="dark border-2 rounded"
        style={{ width: "auto" }}
        bg="secondary"
        text="white"
        className="mb-2"
      >
        <Card.Body>
          <h4>There is no article with the given keyword: "{keyword}".</h4>
        </Card.Body>
      </Card>
    );
  } else {
    categoryList = (
      <div>
        {data &&
          Object.keys(data).map((keyName) => {
            let categoryItem;
            if (keyName !== "id") {
              categoryItem = (
                <CategoryItem
                  key={data[keyName].url}
                  title={data[keyName].title}
                  description={data[keyName].description}
                  author={data[keyName].author}
                  published_at={data[keyName].published_at}
                  image={data[keyName].image}
                  url={data[keyName].url}
                  source={data[keyName].source}
                />
              );
            }
            return categoryItem;
          })}
      </div>
    );
  }

  return categoryList;
};

export default CategoryList;
