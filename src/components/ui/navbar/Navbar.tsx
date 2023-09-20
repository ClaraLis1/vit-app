import Image from "next/image";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div>
        <Link href="#home" as={'image'}>
          <Image src="/logo.jpeg" alt="Logo App" width={100} height={100} priority={true} />
        </Link>
      </div>
      <div className={`${styles.menuIcon} ${menuOpen ? styles.open : ""}`} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <ul className={`${styles.navList} ${menuOpen ? styles.showNav : ""}`}>
        <li onClick={toggleMenu}>
          <Link href='#team' >Equipo</Link>
        </li>
        <li  onClick={toggleMenu}>
          <Link href="#empresa">Empresa</Link>
        </li>
        <li  onClick={toggleMenu}>
          <Link href="/novedades">Novedades</Link>
        </li>
        <li  onClick={toggleMenu}>
          <Link href="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};
