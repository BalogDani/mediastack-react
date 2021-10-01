// import Card from "../UI/Card";

import CustomCard from "../UI/CustomCard";

const CategoryItem = (props) => {
  return (
    <CustomCard
      title={props.title}
      description={props.description}
      author={props.author}
      published_at={props.published_at}
      image={props.image}
      url={props.url}
      source={props.source}
    />
  );
};

export default CategoryItem;
