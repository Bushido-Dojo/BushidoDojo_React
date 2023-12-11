import React from "react";
import img from "../images/logo.png";
import styles from "./HeaderHome.module.css";
import { Link } from "react-router-dom";

function HeaderHome() {
  return (
    <header className={styles.header}>
      <a href="/bushido-dashboard" className={styles.logo}>
        <img src={img} alt="logo do bushido" />
        <h1>
          BUSHIDO <span>DOJO</span>
        </h1>
      </a>

      <Link to={"./matricula"} className="matricula">Matricula</Link>
      <Link to={"/"}>Sair</Link>

    </header>
  );
}

export default HeaderHome;
