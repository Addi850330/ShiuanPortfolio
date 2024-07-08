"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <section className={`${styles.homeSection}`}>
          <div className={`${styles.container}`}>
            <div className={`${styles.row} ${styles.alignItemCenter}`}>
              <div className={styles.homeText}>
                <p>{`Hello, I'm`}</p>
                <h1>Yao Shiuan</h1>
                <h2>frontend wed developer</h2>
                <Link
                  href="/about"
                  className={`${styles.btn} ${styles.linkItem}`}
                >
                  more about me
                </Link>
                <Link
                  href="/profolio"
                  className={`${styles.btn} ${styles.linkItem}`}
                >
                  portfolio
                </Link>
              </div>
              <div className={styles.homeImg}>
                <div className={styles.imgBox}>
                  <Image
                    width={500}
                    height={500}
                    quality={100}
                    src="/img/profile-img.png"
                    alt="Portfolio"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
