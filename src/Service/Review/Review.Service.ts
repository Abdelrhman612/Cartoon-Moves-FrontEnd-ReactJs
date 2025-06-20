import axios from "axios";
import { ReviewUrl } from "../api";

export const ReviewService = () => {
  const getReviews = async (movieId: string) => {
    const res = await axios.get(`${ReviewUrl}/${movieId}`);
    return res.data.data;
  };

  const addReview = async (data: {
    movieId: string;
    userId: string;
    content: string;
  }) => {
    const res = await axios.post(ReviewUrl, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.data.data;
  };

  return { getReviews, addReview };
};
