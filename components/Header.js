"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

const Header = () => {
  const [navswitch, setNavswitch] = useState("close");
  const navsw = function () {
    if (navswitch === "close") {
      setNavswitch("open");
    } else {
      setNavswitch("close");
    }
    console.log(navswitch);
  };

  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={`${styles.row} ${styles.flexEnd}`}>
            <button onClick={navsw} type="button" className={styles.navToggler}>
              <span
                className={navswitch === "close" ? `` : `${styles.active}`}
              ></span>
            </button>
            <nav
              className={
                navswitch === "close"
                  ? `${styles.nav}`
                  : `${styles.nav} ${styles.active}`
              }
            >
              <div
                className={
                  navswitch === "close"
                    ? `${styles.navInner}`
                    : `${styles.navInner} ${styles.active}`
                }
              >
                <ul>
                  <li>
                    <Link
                      onClick={navsw}
                      href="/"
                      className={`${styles.navItem} ${styles.linkItem}`}
                    >
                      home
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={navsw}
                      href="/about"
                      className={`${styles.navItem} ${styles.linkItem}`}
                    >
                      about
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={navsw}
                      href="/profolio"
                      className={`${styles.navItem} ${styles.linkItem}`}
                    >
                      portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={navsw}
                      href="/contact"
                      className={`${styles.navItem} ${styles.linkItem}`}
                    >
                      contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
