import React from "react";
import Searchbar from "./Searchbar/Searchbar";
import styles from "./Header.module.css"; //taki zapis sprawia, ze zakres css obejmuje
// zasięgiem tylko dany komponent (moduł)

// import "./Header.css";   //podłączamy plik Header.css, jednak może on wpływać na
// stylizację innych komponentów w projekcie, dlatego załączamy Header.modules.css
// co sprawia, że nazwa stylizacji odnosi się tylko do danego komponentu (elementu,
// modułu, pliku). W innym komponencie możemy użyć tej samej nazwy dla stylizacji
// (className nie będą miały na siebie wpływu)

function Header() {
  return (
    <header className={styles.header}>
      {/* <header className={styles.header + " container"}></header> */}
      {/* <header className={`${styles.header} container`}></header> */}
      {/* powyżej pokazane jest jak można dodawać klasy w React do siebie 
      (tu modułowa klasa plus bootstrap) */}
      {/* <div className={styles.header}> */}
      {/* <input className={styles.input} type="text" placeholder="Szukaj..." /> */}
      {/* </div> */} <Searchbar />
    </header>
  );
}

export default Header;
