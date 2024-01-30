import React from "react";

import Navigation from "../Navigation/Navigation";
import PageWrapper from "../PageWrapper/PageWrapper";

import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <PageWrapper>
        <Navigation />
      </PageWrapper>
    </header>
  );
};

export default Header;
