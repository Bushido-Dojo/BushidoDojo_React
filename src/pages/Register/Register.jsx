import React from "react";
import Footer from "../../components/footer/Footer";
import NewHeader from "../../components/header/header";
import Visual from "../../components/visual/visual";
import styles from "./register.module.css";
import img from "../../components/images/slogan.png";
import FormRegister from "../../components/formRegister/FormRegister";

const Register = () => {
  return (
    <div className={styles.main}>
      <NewHeader />
      <div className={styles.form}>
          <FormRegister />
      </div>
      <Footer />
    </div>
  );
};

export default Register;
