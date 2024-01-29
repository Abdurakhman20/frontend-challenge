import React from "react";
import { Link } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import styles from "./NotFound.module.css";

const NotFound: React.FC = () => {
  return (
    <PageWrapper>
      <div className={styles.wrapper}>
        <span>😕</span>
        <p>This page has been deleted or never existed!</p>
        <Link to="/">
          <button>Go Back</button>
        </Link>
      </div>
    </PageWrapper>
  );
};

export default NotFound;
