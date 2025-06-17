import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import MovieCard from "../../Components/Movie/MovieCard";
import UseMoves from "../../Hooks/UseMoves";

function Home() {
  const {
    loading,
    filteredMovies,
    setSearchTerm,
    searchInput,
    setSearchInput,
  } = UseMoves();
  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" />
      </Container>
    );
  }
  return (
    <Container className="py-4">
      <h2>List of cartoon movies 🎬</h2>
      <div className="d-flex">
        <Form.Control
          type="text"
          className="mb-4"
          placeholder="Search for the movie"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button
          variant="success"
          className="mb-4"
          type="submit"
          onClick={() => setSearchTerm(searchInput)}
        >
          Search
        </Button>
      </div>
      <Row>
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <Col key={movie.id} md={4} className="mb-4">
              <MovieCard {...movie} />
            </Col>
          ))
        ) : (
          <p className="text-center py-4"> move not found </p>
        )}
      </Row>
    </Container>
  );
}

export default Home;
