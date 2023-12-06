import React from "react";
import HeaderHome from "../../components/headerHome/HeaderHome";
import Footer from "../../components/footer/footer";
import Styles from "./Dashboard.module.css";
import DashBoardHome from "../../components/dashboard/Dashboard-Home";

const Dashboard = () => {
    return (
        <div className={Styles.main}>
            <HeaderHome/>
            <DashBoardHome></DashBoardHome>
        </div>
        );
    };
    
export default Dashboard;