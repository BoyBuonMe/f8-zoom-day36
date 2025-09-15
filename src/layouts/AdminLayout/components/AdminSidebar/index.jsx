import { NavLink } from "react-router";
import styles from "./AdminSidebar.module.scss";

export default function AdminSidebar() {
    const list = [
        {
            to: "users",
            title: "Users"
        },

        {
            to: "settings",
            title: "Settings"
        }
    ];

    return <ul className={styles.sidebar}>
        {list.map((item, index) => (
            <li key={index}>
                <NavLink to={item.to} className={({isActive}) => isActive ? `${styles.item} ${styles.active}` : styles.item}>{item.title}</NavLink>
            </li>
        ))}
    </ul>
}