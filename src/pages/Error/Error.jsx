import React from "react";
import styles from "./error.module.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className={styles.error}>
      <h1>404</h1>
      <p>Página não encontrada</p>
      <Link to={"/"} className={styles.Link}>Volta para página inicial</Link>
    </div>
  );
};

export default Error;
