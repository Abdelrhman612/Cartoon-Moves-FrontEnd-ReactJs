import { Button, Card } from "react-bootstrap";
import type { MovieCardProps } from "./Move.interface";

const MovieCard = ({ title, description, videoUrl, image }: MovieCardProps) => {
  return (
    <Card style={{ height: "100%" }}>
      <Card.Img variant="top" src={image} height={300} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="success" href={videoUrl}>
          Watch now
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
