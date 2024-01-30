import {useContext} from "react";

import {CatsContextInterface} from "./types";
import { CatsContext } from "./CatsContext";

export const useCatContext = (): CatsContextInterface => {
  const context = useContext(CatsContext);
  if (!context) {
    throw new Error("useCatContext must be used within a CatProvider");
  }
  return context;
};
