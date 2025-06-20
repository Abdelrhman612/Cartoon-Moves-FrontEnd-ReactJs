/* eslint-disable react-hooks/exhaustive-deps */
// src/hooks/UseMoves.ts
import { useEffect, useState } from "react";
import { MoviesService } from "../Service/Movie/Movie.Service";
import type { MovieInterface } from "../Components/Movie/Move.interface";
import type { HookInterface } from "./Hook.InterFace";
import { FavoriteService } from "../Service/favorite/favorite.service";
import { ReviewService } from "../Service/Review/Review.Service";

export const UseMoves = () => {
  const movieService = MoviesService();
  const favoriteService = FavoriteService();

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
  // 📌 CREATE MOVIE SECTION
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
  // 📌 UPDATE MOVIE SECTION
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

  // ----------------------------
  // 📌 DELETE MOVIE SECTION
  // ----------------------------
  const useDeleteMovie = () => {
    const [loading, setLoading] = useState(false);
    const deleteMovie = async (id: string) => {
      try {
        setLoading(true);
        await movieService.deleteMovie(id);
      } catch (error) {
        console.error("Delete movie error:", error);
      } finally {
        setLoading(false);
      }
    };

    return { deleteMovie, loading };
  };

  // ----------------------------
  // 📌 FAVORITES SECTION
  // ----------------------------
  const useFavorites = (userId: string) => {
    const [favorites, setFavorites] = useState<MovieInterface[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchFavorites = async () => {
      try {
        setLoading(true);
        const data = await favoriteService.getFavorites(userId);
        setFavorites(data);
      } catch (err) {
        console.error("Error fetching favorites:", err);
      } finally {
        setLoading(false);
      }
    };

    const addFavorite = async (movieId: string) => {
      try {
        await favoriteService.addFavorite(movieId, userId);
        fetchFavorites();
      } catch (err) {
        console.error("Error adding favorite:", err);
      }
    };

    const removeFavorite = async (movieId: string) => {
      try {
        await favoriteService.removeFavorite(movieId, userId);
        fetchFavorites();
      } catch (err) {
        console.error("Error removing favorite:", err);
      }
    };

    useEffect(() => {
      if (userId) fetchFavorites();
    }, [userId]);

    return {
      favorites,
      loading,
      addFavorite,
      removeFavorite,
      fetchFavorites,
    };
  };
  const useReviews = (movieId: string) => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const reviewService = ReviewService();

    const fetchReviews = async () => {
      try {
        setLoading(true);
        const data = await reviewService.getReviews(movieId);
        setReviews(data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
      } finally {
        setLoading(false);
      }
    };

    const addReview = async (userId: string, content: string) => {
      try {
        await reviewService.addReview({ movieId, userId, content });
        fetchReviews();
      } catch (err) {
        console.error("Error adding review:", err);
      }
    };

    useEffect(() => {
      if (movieId) fetchReviews();
    }, [movieId]);

    return { reviews, loading, addReview };
  };

  return {
    useGetMovies,
    useCreateMovie,
    useUpdateMovie,
    useDeleteMovie,
    useFavorites,
    useReviews,
  };
};
