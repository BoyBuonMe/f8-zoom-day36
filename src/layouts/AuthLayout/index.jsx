import { Outlet } from "react-router";
import Header from "../components/Header";
import AuthSidebar from "./components/AuthSidebar";
import styles from "./AuthLayout.module.scss";

export default function AuthLayout() {
    return <>
        <Header />
        <div className={styles.container}>
            <Outlet />
        </div>
        <AuthSidebar />
    </>
}