import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `${styles.nav__link} ${styles.active}`
                : styles.nav__link
            }
          >
            Все котики
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive
                ? `${styles.nav__link} ${styles.active}`
                : styles.nav__link
            }
          >
            Любимые котики
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
