import React from "react";
import img from "../images/logo.png";
import styles from "./HeaderHome.module.css";
import { Link } from "react-router-dom";

function HeaderHome() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <img src={img} alt="logo do bushido" />
        <h1>
          BUSHIDO <span>DOJO</span>
        </h1>
      </a>
    </header>
  );
}

export default HeaderHome;
