"use client";
import React from "react";
import styles from "./page.module.css";

const Bgcircle = () => {
  return (
    <div className={styles.bgCircle}>
      <div className={styles.circleFir}></div>
      <div className={styles.circleSec}></div>
      <div className={styles.circleThi}></div>
      <div className={styles.circleFor}></div>
    </div>
  );
};

export default Bgcircle;
