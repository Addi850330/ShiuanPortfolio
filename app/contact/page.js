"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./page.module.css";

const page = () => {
  return (
    <div className={styles.main}>
      <section className={`${styles.contactSection} ${styles.secPadding}`}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.sectionTitle}>
              <h2>contact me</h2>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.contactForm}>
              <form>
                <div className={styles.row}>
                  <div className={styles.inputGroup}>
                    <input
                      type="text"
                      placeholder="Name"
                      className={styles.inputControl}
                      required
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <input
                      type="text"
                      placeholder="Email"
                      className={styles.inputControl}
                      required
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <input
                      type="text"
                      placeholder="Subject"
                      className={styles.inputControl}
                      required
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <textarea
                      placeholder="Message"
                      className={styles.inputControl}
                      required
                    ></textarea>
                  </div>
                  <div className={styles.submitBtn}>
                    <button type="submit" className={styles.btn}>
                      send message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className={styles.contactInfo}>
              <div className={styles.contactInfoItem}>
                <h3>Email</h3>
                <p>addi@gmail.com</p>
              </div>
              <div className={styles.contactInfoItem}>
                <h3>Phone</h3>
                <p>0988 *** ***</p>
              </div>
              <div className={styles.contactInfoItem}>
                <h3>Follow me</h3>
                <div className={styles.socialLinks}>
                  <Link href="#" target="_blank">
                    <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                  <Link href="#" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                  <Link href="#" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
