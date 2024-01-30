import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

import {CatBreed, CatsContextInterface} from "./types";

type CatProviderProps = {
  children: React.ReactNode;
}

export const CatsContext = createContext<CatsContextInterface | undefined>(undefined);

export const CatProvider = ({ children }: CatProviderProps) => {
  const [data, setData] = useState<CatBreed[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Загрузка данных с API
    const fetchData = async () => {
      try {
        const response = await axios.get<CatBreed[]>("https://api.thecatapi.com/v1/breeds", {
          headers: {
            "x-api-key": process.env.REACT_APP_CAT_API_KEY
          }
        });
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching cat data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <CatsContext.Provider value={{data , isLoading }}>
      {children}
    </CatsContext.Provider>
  );
};
