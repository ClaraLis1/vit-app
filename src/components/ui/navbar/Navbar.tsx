import Image from "next/image";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div>
        <Link href="/" >
          <Image src="/logo.jpeg" alt="Logo App" width={100} height={100} priority={true} />
        </Link>
      </div>
      <div className={`${styles.menuIcon} ${menuOpen ? styles.open : ""}`} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <ul className={`${styles.navList} ${menuOpen ? styles.showNav : ""}`}>
        <li onClick={toggleMenu} className={styles.user}>
          <Link href="/clientes"> <FontAwesomeIcon icon={faUser} className={styles.icon} /> Clientes</Link>
        </li>
        <li onClick={toggleMenu}>
          <Link href={`${router.asPath == '/' ? '#team': '/'}`}>Equipo</Link>
        </li>
        <li onClick={toggleMenu}>
          <Link href={`${router.asPath == '/' ? '#empresa': '/'}`}>Empresa</Link>
        </li>
        <li onClick={toggleMenu}>
          <Link href="/novedades">Novedades</Link>
        </li>
      </ul>
    </nav>
  );
};
