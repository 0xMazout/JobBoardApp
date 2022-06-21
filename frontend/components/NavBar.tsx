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
          <Link href="/">
            <li className={styles.item}>New</li>
          </Link>
          <Link href="/">
            <li className={styles.item}>Dashboard</li>
          </Link>
          <Link href="/">
            <li className={styles.item}>Profil</li>
          </Link>          
        </ul>
      </section>
    </>
  );
};

export default NavBar;
