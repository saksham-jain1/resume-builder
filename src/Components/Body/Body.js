import React, { useRef, useState } from "react";
import styles from "./Body.module.css";
import {ArrowDown} from "react-feather"
import Editor from "../Editor/Editor";
import Resume from "../Resume/Resume";
import ReactToPrint from "react-to-print"

const Body = () => {
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experince",
    project: "Projects",
    education: "Education",
    achievements: "Achievements",
    skills: "Skills",
    summary: "Summary",
    others: "Other",
  };
  const resumeRef = useRef();
  const [resumeInfo, setResumeInfo] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievements]: {
      id: sections.achievements,
      sectionTitle: sections.achievements,
      points: [],
    },
    [sections.skills]: {
      id: sections.skills,
      sectionTitle: sections.skills,
      detail: "",
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.others]: {
      id: sections.others,
      sectionTitle: sections.others,
      detail: "",
    },
  });
  const [activeColor, setActiveColor] = useState(colors[0]);

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Resume Builder</p>
      <div className={styles.toolbar}>
        <div className={styles.colors}>
          {colors.map((curr) => (
            <span
              key={curr}
              onClick={() => setActiveColor(curr)}
              style={{ background: curr }}
              className={`${styles.color} ${
                activeColor === curr ? styles.active : ""
              }`}
            />
          ))}
          <input
            type="color"
            className={`${styles.color} ${styles.active}`}
            value={activeColor}
            onChange={(e) => {
              setActiveColor(e.target.value);
            }}
          />
        </div>
        <ReactToPrint
          trigger={() => {
            return (
              <button>
                Download <ArrowDown />
              </button>
            );
          }}
          content={() => resumeRef.current}
        />
      </div>
      <div className={styles.main}>
        <Editor
          sections={sections}
          information={resumeInfo}
          setInfo={setResumeInfo}
        />
        <hr />
        <center>
          <h1 style={{ color: "#239ce2" }}>Preview</h1>
        </center>
        <hr />
        <Resume
          ref={resumeRef}
          information={resumeInfo}
          sections={sections}
          activeColor={activeColor}
        />
      </div>
    </div>
  );
};

export default Body;
