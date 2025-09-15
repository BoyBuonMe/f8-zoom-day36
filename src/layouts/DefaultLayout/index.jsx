import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "./components/Footer";
import styles from "./DefaultLayout.module.scss";

export default function DefaultLayout() {
    return <>
        <Header />
        <div className={styles.container}>
            <Outlet />
        </div>
        <Footer />
    </>
}