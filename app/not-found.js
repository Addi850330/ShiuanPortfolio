import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

const notFound = () => {
  return (
    <>
      <div className={styles.nfmain}>
        <section className={styles.nfsection}>
          <div className={styles.nftitle}>404 Not Found</div>
          <div className={styles.nfbacklink}>
            <Link href="/">Back to home page</Link>
            <span></span>
          </div>
        </section>
      </div>
    </>
  );
};

export default notFound;
