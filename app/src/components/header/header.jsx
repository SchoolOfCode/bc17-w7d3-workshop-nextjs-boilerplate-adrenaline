"use client";
import { useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";

const Header = () => {
  const [menuStatus, setMenuStatus] = useState(false);

  function handleClick() {
    setMenuStatus(!menuStatus);
  }

  return (
    <header className={styles.headerContainer}>

      <h1 className={styles.title}>
        <a href="http://localhost:3000/" className={styles.title}>🔥 Fireplace Palace</a>
      </h1>

      <button className={styles.menu} onClick={handleClick}>
        <Image
          src="/menu-open-button.png"
          alt="Menu"
          className={styles.hamburgerIcon}
          width={24}
          height={24}
        />
      </button>

      <nav className={menuStatus ? styles.show : styles.hide}>

        <div className={styles.linkStyle}>
          <a className={styles.links} href="http://localhost:3000/">Home 🏠</a>
          <a className={styles.links} href="http://localhost:3000/founders">Meet The Founders 👥</a>
          <a className={styles.links} href="http://localhost:3000/consultation">Book Consultation 📝</a>
        </div>
      </nav>

    </header>
  );
};

export default Header;