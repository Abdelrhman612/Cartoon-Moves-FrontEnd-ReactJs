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
  return { getMovies };
};
