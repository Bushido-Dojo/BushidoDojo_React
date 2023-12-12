import React from "react";
import img from "../images/logo.png";
import Styles from "./HeaderHome.module.css";
import { Link } from "react-router-dom";
import styles from "./HeaderHome.module.css";

function HeaderHome() {
  return (
    <header className={Styles.header}>
      <a href="/bushido-dashboard" className={Styles.logo}>
        <img src={img} alt="logo do bushido" />
        <h1>
          BUSHIDO <span>DOJO</span>
        </h1>
      </a>
      <div className={Styles.options}>
      <Link to={"./matricula"} className={Styles.click}>
      <p>Matricula</p>
      </Link>
      <Link to={"/"} className={Styles.click}>
      <p>Sair</p>
      </Link>
      <Link to={"/bushido-dashboard/delete-account"} className={Styles.click}>
      <p>Deletar conta</p>
      </Link>
      </div>
    </header>
  );
}

export default HeaderHome;
