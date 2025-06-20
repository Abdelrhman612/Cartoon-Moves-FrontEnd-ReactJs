// src/hooks/UseMoves.ts
import { useEffect, useState } from "react";
import { MoviesService } from "../Service/Movie/Movie.Service";
import type { MovieInterface } from "../Components/Movie/Move.interface";
import type { HookInterface } from "./Hook.InterFace";

export const UseMoves = () => {
  const movieService = MoviesService();

  // ----------------------------
  // 📌 GET MOVIES SECTION
  // ----------------------------
  const useGetMovies = () => {
    const [movies, setMovies] = useState<MovieInterface[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchInput, setSearchInput] = useState("");

    const fetchMovies = () => {
      setLoading(true);
      movieService
        .getMovies()
        .then(setMovies)
        .catch((err) => console.log("Fetch error:", err))
        .finally(() => setLoading(false));
    };

    useEffect(() => {
      fetchMovies();
    }, []);

    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
      movies,
      filteredMovies,
      loading,
      searchInput,
      setSearchInput,
      searchTerm,
      setSearchTerm,
      fetchMovies,
    };
  };
  // ----------------------------
  // 📌 POST MOVIES SECTION
  // ----------------------------
  const useCreateMovie = () => {
    const [loading, setLoading] = useState(false);
    const createMovie = async (data: Omit<HookInterface, "id">) => {
      try {
        setLoading(true);
        await movieService.createMovie(data);
      } catch (error) {
        console.error("Create movie error:", error);
      } finally {
        setLoading(false);
      }
    };

    return { createMovie, loading };
  };
  // ----------------------------
  // 📌 PATCH MOVIE SECTION
  // ----------------------------
  const useUpdateMovie = () => {
    const [loading, setLoading] = useState(false);
    const updateMovie = async (id: string, data: Omit<HookInterface, "id">) => {
      try {
        setLoading(true);
        await movieService.updateMovie(id, data);
      } catch (error) {
        console.error("Update movie error:", error);
      } finally {
        setLoading(false);
      }
    };

    return { updateMovie, loading };
  };

  return {
    useGetMovies,
    useCreateMovie,
    useUpdateMovie,
  };
};
