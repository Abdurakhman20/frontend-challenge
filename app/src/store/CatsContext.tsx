import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

import { getCatsFromLS } from "../utils/getCatsFromLS";
import { setCatsToLS } from "../utils/setCatsToLS";

import { CatBreed, CatsContextInterface } from "./types";

type CatProviderProps = {
  children: React.ReactNode;
};

export const CatsContext = createContext<CatsContextInterface | undefined>(
  undefined
);

export const CatProvider = ({ children }: CatProviderProps) => {
  const [data, setData] = useState<CatBreed[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get<CatBreed[]>(
          "https://api.thecatapi.com/v1/breeds",
          {
            headers: {
              "x-api-key": process.env.REACT_APP_CAT_API_KEY,
            },
          }
        );
        const initialData = response.data.map((cat) => ({
          ...cat,
          isLiked: false,
        }));

        setData(initialData);
        setIsLoading(false);
      } catch (error) {
        throw new Error("Error fetching cat data");
      }
    };
    fetchData();
  }, []);
  const [likedCats, setLikedCats] = useState<CatBreed[]>(getCatsFromLS());

  useEffect(() => {
    setCatsToLS(likedCats);
  }, [likedCats]);

  useEffect(() => {
    const cats = data.filter((cat) => cat.isLiked);

    setLikedCats((prev) => {
      const likedCatIds = new Set(prev.map((cat) => cat.id));
      const uniqueCats = cats.filter((cat) => !likedCatIds.has(cat.id));
      return [...prev, ...uniqueCats];
    });
  }, [data]);

  const toggleLike = (catId: string) => {
    setData((prevCats) =>
      prevCats.map((cat) =>
        cat.id === catId ? { ...cat, isLiked: !cat.isLiked } : cat
      )
    );
    setLikedCats((prev) => prev.filter((cat) => cat.id !== catId));
  };

  return (
    <CatsContext.Provider value={{ data, isLoading, likedCats, toggleLike }}>
      {children}
    </CatsContext.Provider>
  );
};
