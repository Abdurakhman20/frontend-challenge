import React from "react";
import styles from "./PageWrapper.module.css";

type PageWrapperType = {
  children: React.ReactNode;
};

const PageWrapper = ({ children }: PageWrapperType) => {
  return <div className={styles.container}>{children}</div>;
};

export default PageWrapper;
