import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/modules/CardProject.module.scss";
import logo from "../public/1200px-The_Event_2010_Intertitle.svg.png";

const CardProject = (_props: any) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.FirstMainColumn}>
          <div className={styles.ContainerImageLogo}>
            <Image
              className={styles.Projectlogo}
              alt="ProjectLogo"
              src={logo}
              layout="responsive"
            />
          </div>
          <p className={styles.ProOrLearn}>Professional or Learning</p>
          <p className={styles.SocialsTab}>Socials tab</p>
        </div>

        <div className={styles.SecondMainColumn}>
          <div className={styles.FirstSecondColumn}>
            <h3 className={styles.Title}>{_props.arrayItem.title}</h3>
            <p className={styles.Bc}>BC</p>
            <p className={styles.Theme}>{_props.arrayItem.theme}</p>
            <div className={styles.FullRow}>Description Component</div>
          </div>
          <div className={styles.SecondSecondColumn}>
            <div className={styles.TeamCard}>
              <p className={styles.ComponentTitle}>Team Title</p>
              <div className={styles.ContainerImageTeam}>
                <Image
                  className={styles.Teamlogo}
                  alt="TeamLogo"
                  src={logo}
                ></Image>
              </div>
              <p className={styles.TeamNumberX}>Team Number X</p>
            </div>
            <div className={styles.MembersSearched}>Membres Recherchés</div>
            <div className={styles.MembersComponent}>
              Members Component Contains Logo and Image of Members
            </div>
            <div>
              <p className={styles.MembersNumber}>Members Number</p>
            </div>
            <div>
              <p className={styles.isProjectLive}>Live Project or Creation</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProject;
