import "./ButtonLayout.scss";

const MyButton = (props) => {
  return (
    <div className="dark right rounded column children">{props.children}</div>
  );
};

export default MyButton;
