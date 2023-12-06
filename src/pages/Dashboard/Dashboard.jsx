import React from "react";
import HeaderHome from "../../components/headerHome/HeaderHome";
import Footer from "../../components/footer/footer";
import Styles from "./Dashboard.module.css";

const Dashboard = () => {
    return (
        <div className={Styles.main}>
            <HeaderHome/>
        </div>
        );
    };
    
export default Dashboard;