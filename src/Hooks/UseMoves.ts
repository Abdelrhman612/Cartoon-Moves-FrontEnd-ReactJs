import { useEffect, useState } from "react";
import { MoviesService } from "../Service/Movie/Movie.Service";
import type { Movie } from "../Pages/Home/Home.interface";
export const UseMoves = () => {
  const [movies, setMovies] = useState<Movie[]>();
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    MoviesService()
      .getMovies()
      .then(setMovies)
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  const filteredMovies = (movies ?? []).filter((movie) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return {
    filteredMovies,
    loading,
    searchTerm,
    setSearchTerm,
    searchInput,
    setSearchInput,
  };
};

export default UseMoves;
