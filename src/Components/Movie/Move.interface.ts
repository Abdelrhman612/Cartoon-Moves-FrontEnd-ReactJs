import type { MovieHomeProps } from "../../Pages/Home/Home.interface";

export interface MovieCardProps {
  title: string;
  description: string;
  videoUrl: string;
  image: string;
  onEdit: () => void;
  onDelete?: () => void;
  onToggleFavorite?: () => void;
  isFavorite?: boolean;
  onShowReviews?: () => void;
}
export interface MovieInterface {
  id: string;
  title: string;
  description: string;
  image: string;
  videoUrl: string;
}

export interface createMovie {
  title: string;
  description: string;
  videoUrl: string;
  image: string;
}
export interface PropsModal {
  show: boolean;
  onClose: () => void;
  initialData?: MovieInterface;
  onSubmit: (data: Omit<MovieHomeProps, "id">) => void | Promise<void>;
}
export interface PropsForm {
  initialData?: MovieInterface;
  onSubmit: (data: Omit<MovieHomeProps, "id">) => void | Promise<void>;
}
