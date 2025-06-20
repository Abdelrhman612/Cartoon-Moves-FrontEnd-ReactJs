// src/Service/Favorite/Favorite.Service.ts
import axios from "axios";
import { FavoriteUrl } from "../api";

export const FavoriteService = () => {
  const addFavorite = async (movieId: string, userId: string) => {
    const res = await axios.post(
      FavoriteUrl,
      { movieId, userId },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return res.data.data;
  };

  const getFavorites = async (userId: string) => {
    const res = await axios.get(`${FavoriteUrl}/${userId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.data.data;
  };

  const removeFavorite = async (movieId: string, userId: string) => {
    const res = await axios.delete(`${FavoriteUrl}/${movieId}/${userId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.data.data;
  };

  return { addFavorite, getFavorites, removeFavorite };
};
