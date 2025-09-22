import React from "react";
import styles from "./Header.module.css";

const Header = ({ toggleTheme, darkMode }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Meu Portfólio</h1>
      <button onClick={toggleTheme} className={styles.themeBtn}>
        {darkMode ? "Tema Claro" : "Tema Escuro"}
      </button>
    </header>
  );
};

export default Header;
