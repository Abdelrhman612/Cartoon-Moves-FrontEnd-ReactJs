import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { UseMoves } from "../../Hooks/UseMoves";
import type { PropsForm } from "./Move.interface";

const MovieForm = ({ initialData, onSubmit }: PropsForm) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const { createMovie, loading: creating } = UseMoves().useCreateMovie();
  const { updateMovie, loading: updating } = UseMoves().useUpdateMovie();

  // Fill form in edit mode
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description);
      setImage(initialData.image);
      setVideoUrl(initialData.videoUrl);
    }
  }, [initialData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const movieData = { title, description, image, videoUrl };

    if (initialData) {
      await updateMovie(initialData.id, movieData);
    } else {
      await createMovie(movieData);
    }

    // Reset + close modal
    setTitle("");
    setDescription("");
    setImage("");
    setVideoUrl("");
    onSubmit();
  };

  return (
    <Form className="p-3" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Video URL</Form.Label>
        <Form.Control
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          required
        />
      </Form.Group>

      <Button type="submit" disabled={creating || updating}>
        {initialData
          ? updating
            ? "Updating..."
            : "Update Movie"
          : creating
          ? "Adding..."
          : "Add Movie"}
      </Button>
    </Form>
  );
};

export default MovieForm;
