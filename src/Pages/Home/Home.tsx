import { useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import MovieCard from "../../Components/Movie/MovieCard";
import MovieModal from "../../Components/Movie/MovieModal";
import { UseMoves } from "../../Hooks/UseMoves";
import type { MovieHomeProps } from "./Home.interface";

function Home() {
  const { useGetMovies } = UseMoves();
  const {
    filteredMovies,
    searchInput,
    setSearchInput,
    setSearchTerm,
    loading,
    fetchMovies,
  } = useGetMovies();

  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<
    MovieHomeProps | undefined
  >();

  const handleOpenModal = (movie?: MovieHomeProps) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedMovie(undefined);
    setShowModal(false);
  };

  const handleFormSubmit = async () => {
    await fetchMovies(); // re-fetch movies after create/edit
    handleCloseModal(); // close modal
  };

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" />
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between mb-3">
        <h2>List of Cartoon Movies 🎬</h2>
        <Button variant="secondary" onClick={() => handleOpenModal()}>
          + Add Movie
        </Button>
      </div>

      <div className="d-flex mb-3">
        <Form.Control
          type="text"
          placeholder="Search by title"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button
          variant="success"
          className="ms-2"
          onClick={() => setSearchTerm(searchInput)}
        >
          Search
        </Button>
      </div>

      <Row>
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <Col key={movie.id} md={4} className="mb-4">
              <MovieCard {...movie} onEdit={() => handleOpenModal(movie)} />
            </Col>
          ))
        ) : (
          <p className="text-center py-4">No movies found</p>
        )}
      </Row>

      <MovieModal
        show={showModal}
        onClose={handleCloseModal}
        initialData={selectedMovie}
        onSubmit={handleFormSubmit}
      />
    </Container>
  );
}

export default Home;
