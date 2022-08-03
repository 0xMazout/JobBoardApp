import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../Cards/styles/CardProject.module.scss";
import logo from "../../public/1200px-The_Event_2010_Intertitle.svg.png";

const CardProject = (_props: any) => {

  const getIsCommercial = () => {
    return _props.arrayItem.isCommercial ? "Commercial" : "Learning";
  }

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
          <p className={styles.ProOrLearn}>{getIsCommercial()}</p>
          <p className={styles.isProjectLive}>Live or New</p>
          <p className={styles.SocialsTab}>Socials</p>
          <p className={styles.SocialsIcons}>Socials Icons</p>
        </div>

        <div className={styles.SecondMainColumn}>
          <div className={styles.FirstSecondColumn}>
            <h3 className={styles.Title}>{_props.arrayItem.title}</h3>
            <p className={styles.Theme}>{_props.arrayItem.theme}</p>
            <p className={styles.Bc}>BC</p>
            <p className={styles.DescriptionTitle}>Description</p>
            <div className={styles.Description}>{_props.arrayItem.description}</div>
          </div>
          <div className={styles.SecondSecondColumn}>
            <div className={styles.TeamCard}>
              {/* If there is a Team in _props.arrayItem.team display TeamCard */}
              <p className={styles.ComponentTitle}>Team Title</p>
              <div className={styles.ContainerImageTeam}>
                <Image
                  className={styles.Teamlogo}
                  alt="TeamLogo"
                  src={logo}
                ></Image>
              </div>
              <p className={styles.TeamMember}>Team Member X</p>
            </div>
            <div className={styles.MembersSearched}>Membres Recherchés</div>
            <div className={styles.MembersComponent}>
              Members Component Contains Logo and Image of Members
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProject;
