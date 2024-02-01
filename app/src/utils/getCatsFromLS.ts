export const getCatsFromLS = () => {
  const data = localStorage.getItem("likedCats");
  const likedCats = data ? JSON.parse(data) : [];

  return likedCats;
};