import { useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import MovieCard from "../../Components/Movie/MovieCard";
import MovieModal from "../../Components/Movie/MovieModal";
import { UseMoves } from "../../Hooks/UseMoves";
import type { MovieHomeProps } from "./Home.interface";
import type { ReviewInterface } from "../../Components/Review/Review.interface";
import ReviewModal from "../../Components/Review/ReviewModal";
import { ReviewService } from "../../Service/Review/Review.Service";

function Home() {
  const { useGetMovies, useDeleteMovie, useFavorites } = UseMoves();
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedMovieReviews, setSelectedMovieReviews] = useState<
    ReviewInterface[]
  >([]);
  const [reviewMovieTitle, setReviewMovieTitle] = useState("");
  const {
    filteredMovies,
    searchInput,
    setSearchInput,
    setSearchTerm,
    loading,
    fetchMovies,
  } = useGetMovies();

  const { deleteMovie } = useDeleteMovie();
  const {
    favorites,
    addFavorite,
    removeFavorite,
    loading: favLoading,
  } = useFavorites("");

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

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      await deleteMovie(id);
      await fetchMovies();
    }
  };

  const handleFormSubmit = async () => {
    await fetchMovies(); // Re-fetch after create/edit
    handleCloseModal(); // Close modal
  };
  const handleShowReviews = async (movie: MovieHomeProps) => {
    const data = await ReviewService().getReviews(movie.id); // يفترض عندك ReviewService
    setSelectedMovieReviews(data);
    setReviewMovieTitle(movie.title);
    setShowReviewModal(true);
  };

  const handleToggleFavorite = (movieId: string) => {
    console.log("clicked", movieId); // ✅ Debug
    const isFav = favorites.some((fav) => fav.id === movieId);
    if (isFav) {
      removeFavorite(movieId);
    } else {
      addFavorite(movieId);
    }
  };
  const isFavorite = (movieId: string) => {
    return favorites.some((fav) => fav.id === movieId);
  };

  if (loading || favLoading) {
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
              <MovieCard
                {...movie}
                onEdit={() => handleOpenModal(movie)}
                onDelete={() => handleDelete(movie.id)}
                onToggleFavorite={() => handleToggleFavorite(movie.id)}
                isFavorite={isFavorite(movie.id)}
                onShowReviews={() => handleShowReviews(movie)}
              />
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
      <ReviewModal
        show={showReviewModal}
        onClose={() => setShowReviewModal(false)}
        reviews={selectedMovieReviews}
        movieTitle={reviewMovieTitle}
      />
    </Container>
  );
}

export default Home;
