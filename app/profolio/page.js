"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { data } from "./portfolio";
import styles from "./page.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Page = () => {
  const portfolios = data[0].portfolio;
  const [por, setPortfolio] = useState(portfolios);

  const [pop, setPop] = useState("close");

  // popu set
  const [imgsrc, setImgsrc] = useState("/img/portfolio/1.jpg");
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [date, setDate] = useState("");
  const [used, setUsed] = useState("");
  const [role, setRole] = useState("");
  const [view, setView] = useState("");

  const popOpen = function (e) {
    const portfolioId = e.target.parentElement.id;

    portfolios.forEach((obj, index) => {
      if (obj.id == portfolioId) {
        setImgsrc(obj.img);
        setTitle(obj.title);
        setDes(obj.des);
        setDate(obj.date);
        setUsed(obj.used);
        setRole(obj.role);
        setView(obj.view);
      }
    });

    setPop("open");
  };
  const popClose = function () {
    setPop("close");
  };
  return (
    <>
      <div className={styles.main}>
        <section className={`${styles.portfolioSection} ${styles.secPadding}`}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.sectionTitle}>
                <h2>recent work</h2>
              </div>
            </div>
            <div className={styles.row}>
              {por.map((por, index) => (
                <div className={styles.porfolioItem} id={por.id} key={por.id}>
                  <div className={styles.porfolioItemThumbnail}>
                    <Image
                      width={500}
                      height={500}
                      quality={100}
                      src={por.img}
                      priority
                      alt="Portfolio"
                    />
                  </div>
                  <h3 className={styles.porfolioItemTitle}>{por.title}</h3>
                  <button
                    onClick={popOpen}
                    type="button"
                    className={`${styles.btn} ${styles.viewProjectBtn}`}
                  >
                    view project
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div
        className={
          pop === "close"
            ? `${styles.porfolioPopup}`
            : `${styles.porfolioPopup} ${styles.open}`
        }
      >
        <div className={styles.ppInner}>
          <div className={styles.ppContent}>
            <div className={styles.ppHeader}>
              <button
                onClick={popClose}
                type="button"
                className={`${styles.btn} ${styles.ppClose}`}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
              <div className={styles.ppThumbnail}>
                <Image
                  width={1000}
                  height={1000}
                  quality={100}
                  src={imgsrc}
                  priority
                  alt="Portfolio-1"
                />
              </div>
              <h3>{title}</h3>
            </div>
            <div className={styles.ppBody}>
              <div className={styles.description}>
                <p>{des}</p>
              </div>
              <div className={styles.generalInfo}>
                <ul>
                  <li>
                    Created - <span>{date}</span>
                  </li>
                  <li>
                    technologies used - <span>{used}</span>
                  </li>
                  <li>
                    Role - <span>{role}</span>
                  </li>
                  <li>
                    View Online -
                    <span>
                      <Link href={view} target="_blank">
                        {view}
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
