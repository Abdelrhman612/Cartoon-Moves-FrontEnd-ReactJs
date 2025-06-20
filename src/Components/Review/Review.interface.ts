export interface ReviewInterface {
  id: string;
  content: string;
  userId: string;
  movieId: string;
  createdAt: string;
}

export interface Props {
  show: boolean;
  onClose: () => void;
  reviews: ReviewInterface[];
  movieTitle: string;
}
