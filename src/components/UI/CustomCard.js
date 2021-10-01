import { Card, ListGroup } from "react-bootstrap";
import "./CustomCard.scss";
import CustomImg from "./CustomImage";
import ButtonLayout from "../layout/ButtonLayout";

const CustomCard = (props) => {
  let author = "There is none";

  if (props.author) {
    author = props.author;
  }

  function convertFromStringToDate(responseDate) {
    let newResponseDate = responseDate.split("+");
    let dateComponents = newResponseDate[0].split("T");
    let datePieces = dateComponents[0].split("-");
    let timePieces = dateComponents[1].split(":");
    let newDate = new Date(
      datePieces[0],
      datePieces[1] - 1,
      datePieces[2],
      timePieces[0],
      timePieces[1],
      timePieces[2]
    );
    return newDate.toUTCString();
  }

  return (
    <Card
      border="dark border-2 rounded"
      style={{ width: "auto" }}
      bg="secondary"
      text="white"
      className="mb-2"
    >
      <Card.Header className="p-3 fs-3 bg-dark">
        <h3 className="left column">{props.title}</h3>
        <CustomImg
          src={props.image}
          className="right column"
          alt={props.source}
        />
      </Card.Header>
      <Card.Body className="border-bottom border-dark">
        {props.category}
        <ListGroup variant="flush">
          <ListGroup.Item
            className="border-bottom border-dark"
            variant="warning"
          >
            <Card.Text>{props.description}</Card.Text>
          </ListGroup.Item>
          <ListGroup.Item
            className="border-bottom border-dark"
            variant="warning"
          >
            Author: {author}
          </ListGroup.Item>
        </ListGroup>
        <br />
        <p className="column left">
          Published at: {convertFromStringToDate(props.published_at)}
        </p>
        <ButtonLayout className="right">
          <a href={props.url}>Original Article</a>
        </ButtonLayout>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
