export type CatImage = {
  id: string;
  url: string;
}

export type CatBreed = {
  id: string;
  image: CatImage;
  isLiked: boolean;
}

export interface CatsContextInterface {
  data: CatBreed[];
  likedCats: CatBreed[];
  isLoading: boolean;
  toggleLike: (catId: string) => void;
}
