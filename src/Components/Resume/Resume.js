import React, { useEffect, useState } from "react";
import styles from "./Resume.module.css";
import {
  AtSign,
  GitHub,
  Phone,
  Linkedin,
  Calendar,
  Paperclip,
  MapPin,
} from "react-feather";

const Resume = () => {
  const [column, setColumn] = useState([[], []]);

  const workSection = (
    <div key="work" className={`${styles.section} ${styles.workExp}`}>
      <div className={styles.sectionTitle}>Work Experince</div>
      <div className={styles.content}>
        <div className={styles.item}>
          <p className={styles.title}>Full Stack Developer</p>
          <p className={styles.subTitle}>Company name</p>
          <a className={styles.link}>
            <Paperclip />
            https://ugakssu
          </a>
          <div className={styles.date}>
            <Calendar /> 12/07/2021 - 2/02/2022
          </div>
          <p className={styles.overview}>
            <MapPin /> Remote
          </p>
          <ul className={styles.points}>
            <li className={styles.point}>iuuhdsiu</li>
            <li className={styles.point}>lsknvlken</li>
            <li className={styles.point}>oijvw;oein</li>
            <li className={styles.point}>lvenawkl</li>
          </ul>
        </div>
      </div>
    </div>
  );
  const projectSection = (
    <div key="project" className={`${styles.section} ${styles.project}`}>
      <div className={styles.sectionTitle}>Project</div>
      <div className={styles.content}>
        <div className={styles.item}>
          <p className={styles.title}>Project 1</p>
          <a className={styles.link}>
            <Paperclip />
            https://ugakssu
          </a>
          <a className={styles.link}>
            <GitHub />
            https://ugakssu
          </a>
          <p className={styles.overview}>jnsfakjebkbq.jn.L</p>
          <ul className={styles.points}>
            <li className={styles.point}>iuuhdsiu</li>
            <li className={styles.point}>lsknvlken</li>
            <li className={styles.point}>oijvw;oein</li>
            <li className={styles.point}>lvenawkl</li>
          </ul>
        </div>
      </div>
    </div>
  );
  const educationSection = (
    <div key="education" className={`${styles.section} ${styles.education}`}>
      <div className={styles.sectionTitle}>Education</div>
      <div className={styles.content}>
        <div className={styles.item}>
          <p className={styles.title}>B.Tech</p>
          <p className={styles.subTitle}>Some clg name</p>
          <div className={styles.date}>
            <Calendar /> 12/07/2021 - 2/02/2022
          </div>
        </div>
      </div>
    </div>
  );
  const achievementSection = (
    <div
      key="achievement"
      className={`${styles.section} ${styles.achievement}`}
    >
      <div className={styles.sectionTitle}>Achievements</div>
      <ul className={styles.numbered}>
        <li>Achienements</li>
        <li>Achienements</li>
        <li>Achienements</li>
        <li>Achienements</li>
      </ul>
    </div>
  );
  const summarySection = (
    <div key="summary" className={`${styles.section} ${styles.achievement}`}>
      <div className={styles.sectionTitle}>Summary</div>
      <div className={styles.content}>
        <p className={styles.overview}>This is dummy basic summary</p>
      </div>
    </div>
  );
  const otherSection = (
    <div key="other" className={`${styles.section} ${styles.other}`}>
      <div className={styles.sectionTitle}>Other</div>
      <div className={styles.content}>
        <p className={styles.overview}>This is dummy basic other</p>
      </div>
    </div>
  );

  useEffect(() => {
    setColumn([
      [educationSection, projectSection, summarySection],
      [workSection, achievementSection, otherSection],
    ]);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.heading}>Name</p>
        <p className={styles.subHeading}>Blockchain</p>
        <div className={styles.links}>
          <p className={styles.link}>
            <AtSign /> Email@email.com
          </p>
          <p className={styles.link}>
            <Phone /> phone
          </p>
          <p className={styles.link}>
            <Linkedin /> https://linkedin
          </p>
          <p className={styles.link}>
            <GitHub /> https://linkedin
          </p>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.col1}>{column[0]}</div>
        <div className={styles.col2}>{column[1]}</div>
      </div>
    </div>
  );
};

export default Resume;
