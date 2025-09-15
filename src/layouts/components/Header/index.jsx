import { NavLink } from "react-router";
import styles from "./Header.module.scss";

export default function Header() {
  const routes = [
    {
      to: "/",
      title: "Home",
    },
    {
      to: "/about",
      title: "About",
    },
    {
      to: "/posts",
      title: "Posts",
    },
    {
      to: "/contact",
      title: "Contact",
    },
    {
      to: "/privacy",
      title: "Privacy",
    },
    {
      to: "/admin",
      title: "Admin",
    },
  ];

  const auths = [
    {
      to: "/login",
      title: "Login",
    },
    {
      to: "/register",
      title: "Register",
    },
  ];
  return (
    <header className={styles.header}>
      <ul className={styles.nav}>
        {routes.map((route, index) => (
          <li key={index}>
            <NavLink
              to={route.to}
              className={({ isActive }) =>
                isActive ? `${styles.item} ${styles.active}` : styles.item
              }
            >
              {route.title}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className={styles.auth}>
        {auths.map((auth, index) => (
          <li key={index} className={styles.auth}>
            <NavLink
              to={auth.to}
              className={({ isActive }) =>
                isActive ? `${styles.item} ${styles.active}` : styles.item
              }
            >
              {auth.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
}
