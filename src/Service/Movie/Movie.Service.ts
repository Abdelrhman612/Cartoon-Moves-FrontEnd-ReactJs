import axios from "axios";
import { MovieUrl } from "../api";

export const MoviesService = () => {
  const getMovies = async () => {
    const res = await axios.get(MovieUrl, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    });
    return res.data.data;
  };
  const createMovie = async (data: {
    title: string;
    description: string;
    image: string;
    videoUrl: string;
  }) => {
    const res = await axios.post(MovieUrl, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    });
    return res.data.data;
  };
  const updateMovie = async (
    id: string,
    data: {
      title: string;
      description: string;
      image: string;
      videoUrl: string;
    }
  ) => {
    const res = await axios.patch(`${MovieUrl}/${id}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    });
    return res.data.data;
  };
  const deleteMovie = async (id: string) => {
    const res = await axios.delete(`${MovieUrl}/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    });
    return res.data.data;
  };
  return { getMovies, createMovie, updateMovie, deleteMovie };
};
