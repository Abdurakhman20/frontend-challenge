import { CatBreed } from "../store/types";

export const setCatsToLS = (likedCats: CatBreed[]) => {
  const jsn = JSON.stringify(likedCats);
  localStorage.setItem("likedCats", jsn);
};