import { Button, Card } from "react-bootstrap";
import type { MovieCardProps } from "./Move.interface";

const MovieCard = ({
  title,
  description,
  videoUrl,
  image,
  onEdit,
  onDelete,
}: MovieCardProps) => {
  return (
    <Card style={{ height: "100%" }}>
      <Card.Img variant="top" src={image} height={300} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="d-flex justify-content-between">
          <Button variant="success" href={videoUrl}>
            Watch now
          </Button>
          <Button variant="warning" onClick={onEdit}>
            Edit
          </Button>
          <Button variant="danger" onClick={onDelete} className="ms-2">
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
