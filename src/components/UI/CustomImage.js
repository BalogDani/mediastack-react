import React from "react";
import defaultImage from "../../broken-1.png";

class CustomImg extends React.Component {
  render() {
    let image_path = this.props.src;
    if (image_path === null) {
      image_path = defaultImage;
    }
    return (
      <img
        width={this.props.width}
        src={image_path}
        className={this.props.className}
        alt={this.props.alt}
      />
    );
  }
}

export default CustomImg;
