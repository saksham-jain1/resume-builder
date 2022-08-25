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

const Resume = ({ information, sections }) => {
  const [column, setColumn] = useState([[], []]);
  const [source, setSource] = useState("");
  const [target, setTarget] = useState("");
  const info = {
    workExp: information[sections.workExp],
    project: information[sections.project],
    achievements: information[sections.achievements],
    education: information[sections.education],
    basicInfo: information[sections.basicInfo],
    summary: information[sections.summary],
    other: information[sections.others],
  };
  const getFormattedDate = (value) => {
    if (!value) return "";
    const date = new Date(value);

    return `${date.getDate()}/${
      date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + date.getMonth() + 1
    }/${date.getFullYear()}`;
  };

  const sectionDiv = {
    [sections.workExp]: (
      <div
        key="work"
        draggable
        onDragOver={()=> setTarget(info.workExp?.id)}
        onDragEnd={()=> setSource(info.workExp?.id)}
        className={`${styles.section} ${
          info.workExp?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.workExp.sectionTitle}</div>
        <div className={styles.content}>
          {info.workExp?.details?.map((curr, id) => (
            <div className={styles.item} key={id}>
              {curr.title && <p className={styles.title}>{curr.title}</p>}
              {curr.companyName && (
                <p className={styles.subTitle}>{curr.companyName}</p>
              )}
              {curr.certificationLink && (
                <a className={styles.link} href={curr.certificationLink}>
                  <Paperclip />
                  {curr.certificationLink}
                </a>
              )}
              {curr.startDate && curr.endDate && (
                <div className={styles.date}>
                  <Calendar /> {getFormattedDate(curr.startDate)} -{" "}
                  {getFormattedDate(curr.endDate)}
                </div>
              )}
              {curr.location && (
                <p className={styles.overview}>
                  <MapPin /> {curr.location}
                </p>
              )}
              {curr.points?.length > 0 && (
                <ul className={styles.points}>
                  {curr.points?.map((point, id) => (
                    <li className={styles.point} key={id}>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.project]: (
      <div
        key="project"
        draggable
        onDragOver={()=> setTarget(info.project?.id)}
        onDragEnd={()=> setSource(info.project?.id)}
        className={`${styles.section} ${
          info.project?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.project.sectionTitle}</div>
        <div className={styles.content}>
          {info.project?.details?.map((curr, id) => (
            <div className={styles.item} key={id}>
              {curr.title && <p className={styles.title}>{curr.title}</p>}
              {curr.link && (
                <a className={styles.link} href={curr.link}>
                  <Paperclip />
                  {curr.link}
                </a>
              )}
              {curr.github && (
                <a className={styles.link} href={curr.github}>
                  <GitHub />
                  {curr.github}
                </a>
              )}
              {curr.overview && (
                <p className={styles.overview}>{curr.overview}</p>
              )}
              {curr.points?.length > 0 && (
                <ul className={styles.points}>
                  {curr.points?.map((point, id) => (
                    <li className={styles.point} key={id}>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.education]: (
      <div
        key="education"
        draggable
        onDragOver={()=> setTarget(info.education?.id)}
        onDragEnd={()=> setSource(info.education?.id)}
        className={`${styles.section} ${
          info.education?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.education.sectionTitle}</div>
        <div className={styles.content}>
          {info.education?.details?.map((curr, id) => (
            <div className={styles.item} key={id}>
              {curr.title && <p className={styles.title}>{curr.title}</p>}
              {curr.college && (
                <p className={styles.subTitle}>{curr.college}</p>
              )}
              {curr.startDate && curr.endDate && (
                <div className={styles.date}>
                  <Calendar /> {getFormattedDate(curr.startDate)} -{" "}
                  {getFormattedDate(curr.endDate)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.achievements]: (
      <div
        key="achievements"
        draggable
        onDragOver={()=> setTarget(info.achievements?.id)}
        onDragEnd={()=> setSource(info.achievements?.id)}
        className={`${styles.section} ${
          info.achievements?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>
          {info.achievements.sectionTitle}
        </div>
        <div className={styles.content}>
          {info.achievements?.points?.length > 0 && (
            <ul className={styles.numbered}>
              {info.achievements?.points?.map((point, id) => (
                <li className={styles.point} key={id}>
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    ),
    [sections.summary]: (
      <div
        key="summary"
        draggable
        onDragOver={()=> setTarget(info.summary?.id)}
        onDragEnd={()=> setSource(info.summary?.id)}
        className={`${styles.section} ${
          info.summary?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.summary?.sectionTitle}</div>
        <div className={styles.content}>
          <p className={styles.overview}>{info.summary?.summary}</p>
        </div>
      </div>
    ),
    [sections.other]: (
      <div
        key="other"
        draggable
        onDragOver={()=> setTarget(info.other?.id)}
        onDragEnd={()=> setSource(info.other?.id)}
        className={`${styles.section} ${
          info.other?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.other?.sectionTitle}</div>
        <div className={styles.content}>
          <p className={styles.overview}>{info?.other?.other}</p>
        </div>
      </div>
    ),
  };

  const swapSourceTarget = (source, target)=>{
    if(!source || !target) return;
    const tempColumns = [[...column[0]],[...column[1]]];

    let sourceRowIndex = tempColumns[0].findIndex((item)=>item===source);
    let sourceColumnIndex = 0;
    if(sourceRowIndex<0){
      sourceColumnIndex = 1;
      sourceRowIndex = tempColumns[1].findIndex((item)=> item===source);
    }
    let targetRowIndex = tempColumns[0].findIndex((item)=>item===target);
    let targetColumnIndex = 0;
    if(targetRowIndex<0){
      targetColumnIndex = 1;
      targetRowIndex = tempColumns[1].findIndex((item)=> item===target);
    }
    const tempSource = tempColumns[sourceColumnIndex][sourceRowIndex];
    tempColumns[sourceColumnIndex][sourceRowIndex] = tempColumns[targetColumnIndex][targetRowIndex];
    tempColumns[targetColumnIndex][targetRowIndex] = tempSource;

    setColumn(tempColumns);
  }

  useEffect(() => {
    setColumn([
      [sections.education, sections.workExp, sections.project],
      [sections.project, sections.achievements, sections.other],
    ]);
  }, []);

  useEffect(() => {
    swapSourceTarget(source,target);
  }, [source])
  

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.heading}>{info.basicInfo.detail.name}</p>
        <p className={styles.subHeading}>{info.basicInfo.detail.title}</p>
        <div className={styles.links}>
          {info.basicInfo.detail.email && (
            <p className={styles.link}>
              <AtSign /> {info.basicInfo.detail.email}
            </p>
          )}
          {info.basicInfo.detail.phone && (
            <p className={styles.link}>
              <Phone /> {info.basicInfo.detail.phone}
            </p>
          )}
          {info.basicInfo.detail.github && (
            <p className={styles.link}>
              <Linkedin /> {info.basicInfo.detail.github}
            </p>
          )}
          {info.basicInfo.detail.linkedin && (
            <p className={styles.link}>
              <GitHub /> {info.basicInfo.detail.linkedin}
            </p>
          )}
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.col1}>
          {column[0].map((curr) => sectionDiv[curr])}
        </div>
        <div className={styles.col2}>
          {column[1].map((curr) => sectionDiv[curr])}
        </div>
      </div>
    </div>
  );
};

export default Resume;
