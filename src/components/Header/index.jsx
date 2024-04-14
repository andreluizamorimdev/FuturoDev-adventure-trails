import menu from "./menu.js";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
function Header() {
 return (
  <header className={styles.header}>
   <Link className={styles.logo} to={"/"}>
    <h1 className={styles["logo-header"]}>{menu.titulo}</h1>
   </Link>
   <nav className={styles["menu-navbar"]}>
    <ul className={styles["menu-navbar-list"]}>
     {menu.links.map((link, index) => (
      <li className={styles["menu-navbar-list-item"]} key={index}>
       <Link to={link.path}>{link.texto}</Link>
      </li>
     ))}
    </ul>
   </nav>
  </header>
 );
}

export default Header;
