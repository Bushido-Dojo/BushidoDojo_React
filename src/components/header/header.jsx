import React from "react";


import img from "../images/logo.png";
import home from "../images/home.png";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function NewHeader() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <img src={img} alt="logo do bushido" />
        <h1>
          BUSHIDO <span>DOJO</span>
        </h1>
      </a>
      <div className={styles.options}>
        <Link to={"/"} className={styles.about}>
        <FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} />
          <p>Login</p>
        </Link>
        <Link to={"/Register"} className={styles.about}>
        <FontAwesomeIcon icon={faRightToBracket} style={{color: "#ffffff",}} />
          <p>Register</p>
        </Link>
      </div>
    </header>
  );
}

export default NewHeader;
