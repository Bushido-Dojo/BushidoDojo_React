import React from "react";
import img from "../images/logo.png";
import book from "../images/book.svg";
import styles from "./header.module.css";

import { Link } from "react-router-dom";

function NewHeader() {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        <img src={img} alt="logo do bushido" />
        <h1>
          BUSHIDO <span>DOJO</span>
        </h1>
      </a>
      <div className={styles.options}>
        <Link to={"/about"} className={styles.about}>
          <img src={book} />
          <p>About us</p>
        </Link>
        <Link to={"/login"} className={styles.about}>
          <img src={book} />
          <p>Login</p>
        </Link>
        <Link to={"/"} className={styles.about}>
          <img src={book} />
          <p>Home</p>
        </Link>
        <Link to={"/Register"} className={styles.about}>
          <img src={book} />
          <p>Register</p>
        </Link>
      </div>
    </header>
  );
}

export default NewHeader;
