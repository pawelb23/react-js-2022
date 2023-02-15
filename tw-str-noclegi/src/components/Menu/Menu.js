import React from "react";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <div className={`${styles.menuContainer} container-fluid`}>
      <div className={styles.menuBorder}>
        {/* powyższa klasa bootstrap container-fluid w tym wypadku dziła lepiej, niż sam 
      container (poniżej - można odkomentować i też ją sprawdzić) */}

        {/* <div className={`${style.menuContainer} container ms-auto me-auto`}> */}
        {/* powyższy zapis ładnie nam wycentruje element (marginesy (start i end) muszą mieć
      wartość auto) */}
        {/* </div> */}

        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <a className={styles.aElement} href="#home">
              Home
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
