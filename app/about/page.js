"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { data } from "./about";
import styles from "./page.module.css";

const page = () => {
  const about = data[3].about;
  const [abo, setAbout] = useState(about);

  const skills = data[0].skills;
  const [skill, setSkill] = useState(skills);

  const edu = data[1].education;
  const [education, setEdu] = useState(edu);

  const exp = data[2].experience;
  const [experience, setExp] = useState(exp);

  const [infoSwitch, setInfoSwitch] = useState("education");
  const expToggle = function () {
    setInfoSwitch("experience");
  };
  const eduToggle = function () {
    setInfoSwitch("education");
  };
  return (
    <div className={styles.main}>
      <section className={`${styles.aboutSection} ${styles.secPadding}`}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.sectionTitle}>
              <h2>About me</h2>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.aboutImg}>
              <div className={styles.imgBox}>
                <Image
                  width={500}
                  height={500}
                  quality={100}
                  priority
                  src="/img/about-img.png"
                  alt="about"
                />
              </div>
            </div>
            <div className={styles.aboutText}>
              <p>{abo}</p>
              <h3>skills</h3>
              <div className={styles.skills}>
                {skill.map((skill, index) => (
                  <div className={styles.skillItem} key={skill.id}>
                    {skill.name}
                  </div>
                ))}
              </div>
              <div className={styles.aboutTabs}>
                <button
                  onClick={eduToggle}
                  type="button"
                  className={
                    infoSwitch === "education"
                      ? `${styles.tabItem} ${styles.active}`
                      : `${styles.tabItem}`
                  }
                >
                  education
                </button>
                <button
                  onClick={expToggle}
                  type="button"
                  className={
                    infoSwitch === "experience"
                      ? `${styles.tabItem} ${styles.active}`
                      : `${styles.tabItem}`
                  }
                >
                  experience
                </button>
              </div>
              <div
                className={
                  infoSwitch === "education"
                    ? `${styles.tabContent} ${styles.active}`
                    : `${styles.tabContent}`
                }
              >
                <div className={styles.timeLine}>
                  {education.map((education, index) => (
                    <div className={styles.timelineItem} key={education.id}>
                      <span className={styles.date}>{education.date}</span>
                      <h4>
                        {education.school}
                        <span>{education.schooldes}</span>
                      </h4>
                      <p>{education.des}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={
                  infoSwitch === "experience"
                    ? `${styles.tabContent} ${styles.active}`
                    : `${styles.tabContent}`
                }
              >
                <div className={styles.timeLine}>
                  {experience.map((experience, index) => (
                    <div className={styles.timelineItem} key={experience.id}>
                      <span className={styles.date}>{experience.date}</span>
                      <h4>
                        {experience.f}
                        <span>{experience.e}</span>
                      </h4>
                      <p>{experience.des}</p>
                    </div>
                  ))}
                </div>
              </div>
              <Link href="#cv.pdf" className={styles.btn} target="_blank">
                download cv
              </Link>
              <Link
                href="/profolio"
                className={`${styles.btn} ${styles.linkItem}`}
              >
                my portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
