import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/modules/CardProject.module.scss";
import logo from "../public/1200px-The_Event_2010_Intertitle.svg.png";

const CardProject = (_props: any) => {
  return (
    <>
      <div className={styles.FirstMainColumn}>
        <Image
          className={styles.logo}
          alt="ProjectLogo"
          src={logo}
          layout="responsive"
        />
        <p>Professional or Learning</p>
        <div>Socials tab</div>
      </div>

      <div className={styles.SecondMainColumn}>
        <div className={styles.FirstSecondColumn}>
          <h1 className={styles.Title}>Title</h1>
          <h6 className={styles.Bc}>BC</h6>
          <p className={styles.Theme}>Theme</p>
        </div>
        <div className={styles.SecondSecondColum}>
          <h1>
            Team Component
          </h1>
          <div>
            <Image className={styles.Teamlogo}
          alt="ProjectLogo"
          src={logo}
          layout="responsive">
            </Image>
          </div>
          <p>
            Team Number X
          </p>
        </div>
        <div className={styles.FullRow}>
          Description Component
        </div>
        <div className={styles.FullRow}>
            Membres Recherchés
          <div className={styles.Members}>
            Members Component
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProject;
