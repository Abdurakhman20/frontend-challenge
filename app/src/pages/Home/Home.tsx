import React from "react";

import PageWrapper from "../../components/PageWrapper/PageWrapper";

import { useCatContext } from "../../store/hooks";
import CatCardList from "../../components/CatCardList/CatCardList";


const Home = () => {
  const {data, isLoading} = useCatContext();
  if(isLoading) return <p>...loading</p>;
  return (
    <PageWrapper>
      <CatCardList cats={data} />
    </PageWrapper>
  );
};

export default Home;
