import { Modal, Button } from "react-bootstrap";
import type { Props } from "./Review.interface";

const ReviewModal = ({ show, onClose, reviews, movieTitle }: Props) => {
  return (
    <Modal show={show} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Reviews for "{movieTitle}"</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="mb-3 border-bottom pb-2">
              <p className="mb-1">
                <strong>User:</strong> {review.userId}
              </p>
              <p className="mb-0">{review.content}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet for this movie.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReviewModal;
