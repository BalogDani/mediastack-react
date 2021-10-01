import CategoryItem from "./CategoryItem";
import "./CategoryList.scss";

const CategoryList = (props) => {
  let data;
  if (typeof props.categories[1] !== "undefined") {
    data = props.categories[1];
  }
  return (
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
                category={data[keyName].category} // Remove this
              />
            );
          }
          return categoryItem;
        })}
    </div>
  );
};

export default CategoryList;
