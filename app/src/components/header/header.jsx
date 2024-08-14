"use client";
import { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [menuStatus, setMenuStatus] = useState(false);

  function handleClick() {
    setMenuStatus(!menuStatus);
  }

  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.title}>🔥 Fireplace Palace</h1>
      <button onClick={handleClick}> Menu Toggle </button>
      <nav className={menuStatus ? styles.show : styles.hide}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Meet The Founders</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
