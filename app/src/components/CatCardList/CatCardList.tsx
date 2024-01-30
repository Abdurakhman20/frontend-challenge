import React from "react";

import CatCard from "../CatCard/CatCard";

import styles from "./CatCardList.module.css";
import { CatCardListProps } from "./types";


const CatCardList = ({ cats }: CatCardListProps) => {
  return ( 
    <div className={styles.wrapper}>
      {
        cats.map(({id, image, isLiked }) => (
          <CatCard imgUrl={image?.url} key={id} catId={id} isLiked={isLiked} />
        ))
      }
    </div>
  );
};
 
export default CatCardList;