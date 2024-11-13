"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "@/components/css/header.module.css";

export default function Header() {
  // navbar JS responsiveness
  const [menuIcon, setMenuIcon] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  const handleSmScrNav = () => {
    setMenuIcon(!menuIcon);
    setIsOpen(!isOpen)
  };

  // navbar JS sticky animation

  const [fix, setFix] = useState(false);

  useEffect(() => {
    const onScroll = () => setFix(window.scrollY >= 450)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])


  //navbar HTML
  return (
    <header className={`${fix ? `${styles.fixey}` : `${styles.header}`} ${isOpen ? styles.headerOpen : ''}`}>
      <nav className={styles.navbar}>
        <div>
          <Link href={"/"}>
            <span className={styles.logo}>Elan</span>
          </Link>
        </div>

        <ul className={styles.menus}>
          <li>
            <Link href={"/about"}>About Us</Link>
          </li>
          <li>
            <Link href={"/catalog"}>Catalog</Link>
          </li>
          <li>
            <Link href={"/team"}>Teams</Link>
          </li>
        </ul>

        {/* navbuttons - will be replaced by proper burger button*/}
        <div className={styles.nav_burger} onClick={handleSmScrNav}>
          <span className="text-4xl font-black">{menuIcon ? "×" : "≡"}</span>
        </div>

        {/* mobilenavs */}
        <div
          className={
            menuIcon ? `${styles.menu_active}` : `${styles.menu_inactive}`
          }
        >
          {/* responsive menu version */}
          <div className="w-full">
            <ul className={styles.menus_responsive}>
              <li onClick={handleSmScrNav}>
                <Link href={"/about"}>About Us</Link>
              </li>
              <li onClick={handleSmScrNav}>
                <Link href={"/catalog"}>Catalog</Link>
              </li>
              <li onClick={handleSmScrNav}>
                <Link href={"/team"}>Teams</Link>
              </li>
            </ul>
          </div>


        </div>
      </nav>
    </header>
  );
}
