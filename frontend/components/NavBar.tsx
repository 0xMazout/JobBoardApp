import React from "react";
import styles from "../styles/modules/NavBar.module.scss";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/1200px-The_Event_2010_Intertitle.svg.png";

const NavBar = (_props: any) => {
  return (
    <>
      <section className={styles.sectiona}>
        <div className={styles.containerImage}>
          <Image
            className={styles.logo}
            alt="Vercel logo"
            src={logo}
            layout="responsive"
          />
        </div>

        <ul className={styles.menu}>
          <Link href="/chooseNew">
            <button className={styles.item}>New</button>
          </Link>
          <Link href="/">
            <button className={styles.item}>Dashboard</button>
          </Link>
          <Link href="/">
            <button className={styles.item}>Profil</button>
          </Link>          
        </ul>
      </section>
    </>
  );
};

export default NavBar;
