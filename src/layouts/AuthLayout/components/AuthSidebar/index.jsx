import { NavLink } from "react-router";
import styles from "./AuthSidebar.module.scss";

export default function AuthSidebar() {
    const list = [
        {
            to: "/login",
            title: "Login"
        },
        
        {
            to: "/register",
            title: "Register"
        },
    ];

    return <ul className={styles.sidebar}>
        {list.map((item, index) => (
            <li key={index}>
                <NavLink to={item.to} className={({isActive}) => isActive ? `${styles.item} ${styles.active}` : styles.item}>{item.title}</NavLink>
            </li>
        ))}
    </ul>
}