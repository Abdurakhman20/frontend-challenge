import React from "react";

import PageWrapper from "../../components/PageWrapper/PageWrapper";

import { useCatContext } from "../../store/hooks";
import CatCardList from "../../components/CatCardList/CatCardList";

import styles from "./Home.module.css";

const Home = () => {
  const {data, isLoading} = useCatContext();

  if(isLoading) return (
    <PageWrapper>
      <div className={styles.wrapper}>
        <p className={styles.loading}>
          ...loading
        </p>
      </div>
    </PageWrapper>
  );
  return (
    <PageWrapper>
      <CatCardList cats={data} />
    </PageWrapper>
  );
};

export default Home;
