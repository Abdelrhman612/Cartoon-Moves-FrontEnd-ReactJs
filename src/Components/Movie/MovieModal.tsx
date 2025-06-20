import { Modal } from "react-bootstrap";
import MovieForm from "./MovieForm";
import type { PropsModal } from "./Move.interface";

const MovieModal = ({ show, onClose, initialData, onSubmit }: PropsModal) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {initialData ? "Edit Movie" : "Add New Movie"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MovieForm initialData={initialData} onSubmit={onSubmit} />
      </Modal.Body>
    </Modal>
  );
};

export default MovieModal;
