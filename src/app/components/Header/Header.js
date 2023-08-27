import React from "react";
import Link from "next/link"; // Importe o componente Link
import styles from "./Header.module.css";


const Header = () => {
 return (
  <header className={styles.header}>
   <nav>
    <ul className={styles.navList}>
     <li>
      <Link href="/">Home</Link>
     </li>
     <li>
      <Link href="/cadastro">Cadastro</Link>
     </li>
     <li>
      <Link href="/login">Login</Link>
     </li>
    </ul>
   </nav>
  </header>
 );
};

export default Header;
