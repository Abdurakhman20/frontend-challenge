import React from "react";

import AppRouter from "./components/AppRouter/AppRouter";
import Header from "./components/Header/Header";

import { useCatContext } from "./store/hooks";

function App() {
  const {data, isLoading} = useCatContext();

  if(isLoading) return <p>...loading</p>;

  console.log(data);
  return (
    <React.Fragment>
      <Header />
      <main>
        <AppRouter />
      </main>
    </React.Fragment>
  );
}

export default App;
