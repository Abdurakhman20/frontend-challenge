import React from "react";
import styles from "./Header.module.css";
import Navigation from "../Navigation/Navigation";
import PageWrapper from "../PageWrapper/PageWrapper";

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
