import "./ButtonLayout.scss";

const MyButton = (props) => {
  return (
    <div className="dark article rounded column children">{props.children}</div>
  );
};

export default MyButton;
