import { Button, Card } from "react-bootstrap";
import type { MovieCardProps } from "./Move.interface";

const MovieCard = ({
  title,
  description,
  videoUrl,
  image,
  onEdit,
  onDelete,
  onToggleFavorite,
  isFavorite,
}: MovieCardProps) => {
  return (
    <Card style={{ height: "100%" }}>
      <Card.Img variant="top" src={image} height={300} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="d-flex flex-wrap justify-content-between gap-2 mt-3">
          <Button variant="warning" onClick={onEdit}>
            ✏️ Edit
          </Button>
          <Button variant="success" href={videoUrl} target="_blank">
            ▶️ Watch
          </Button>
          <Button variant="danger" onClick={onDelete}>
            🗑️ Delete
          </Button>
          {onToggleFavorite && (
            <Button
              variant={isFavorite ? "outline-danger" : "outline-primary"}
              onClick={onToggleFavorite}
            >
              {isFavorite ? "💔 Remove Favorite" : "❤️ Add to Favorite"}
            </Button>
          )}
  
        </div>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
