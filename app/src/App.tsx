import React from "react";

import AppRouter from "./components/AppRouter/AppRouter";
import Header from "./components/Header/Header";

function App() {
  
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
