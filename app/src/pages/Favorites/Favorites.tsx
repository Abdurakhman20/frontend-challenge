import React from "react";
import { Link } from "react-router-dom";

import { useCatContext } from "../../store/hooks";

import PageWrapper from "../../components/PageWrapper/PageWrapper";
import CatCardList from "../../components/CatCardList/CatCardList";

import styles from "./Favorites.module.css";

const Favorites = () => {
  const { likedCats } = useCatContext();
  return (
    <PageWrapper>
      {likedCats.length ? (
        <CatCardList cats={likedCats} />
      ) : (
        <div className={styles.wrapper}>
          <span>😢</span>
          <p>У тебя еще нет любимых котиков. Ты что не любишь котиков?</p>
          <Link to="/">
            <button>На главную</button>
          </Link>
        </div>
      )}
    </PageWrapper>
  );
};

export default Favorites;
