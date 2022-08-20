import React, { useEffect, useState } from "react";
import InputControl from "../InputControl/InputControl";
import styles from "./Editor.module.css";
import { X } from "react-feather";

const Editor = ({ sections, information, setInfo }) => {
  const [activeSectionKey, setactiveSectionKey] = useState(
    Object.keys(sections)[0]
  );
  const [activeInfo, setActiveInfo] = useState(
    information[sections[Object.keys(sections)[0]]]
  );
  const [sectionTitle, setSectionTitle] = useState(
    sections[Object.keys(sections)[0]]
  );
  const handlePoint = (value, index) => {
    const tempValues = { ...values };
    if (!Array.isArray(tempValues.points)) tempValues.points = [];
    tempValues.points[index] = value;
    setValues(tempValues);
  };
  const [values, setValues] = useState({
    name: activeInfo?.detail?.name || "",
    title: activeInfo?.detail?.title || "",
    linkedin: activeInfo?.detail?.linkedin || "",
    github: activeInfo?.detail?.github || "",
    phone: activeInfo?.detail?.phone || "",
    email: activeInfo?.detail?.email || "",
  });
  const [activeDetailIndex, setactiveDetailIndex] = useState(0);
  const workExperinceBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg: Frontend developer"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
        <InputControl
          label="Company Name"
          placeholder="Enter company name eg: amazon"
          value={values.companyName}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, companyName: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Certificate Link"
          placeholder="Enter certificate link"
          value={values.certificateLink}
          onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              certificateLink: event.target.value,
            }))
          }
        />
        <InputControl
          label="Location"
          placeholder="Enter location eg: remote"
          value={values.location}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, location: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of work"
          value={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of work"
          value={values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }
        />
      </div>
      <div className={styles.column}>
        <label>Enter work description</label>
        <InputControl
          value={values.points ? values.points[0] : ""}
          placeholder="Line 1"
          onChange={(event) => handlePoint(event.target.value, 0)}
        />
        <InputControl
          value={values.points ? values.points[1] : ""}
          placeholder="Line 2"
          onChange={(event) => handlePoint(event.target.value, 1)}
        />
        <InputControl
          value={values.points ? values.points[2] : ""}
          placeholder="Line 3"
          onChange={(event) => handlePoint(event.target.value, 2)}
        />
      </div>
    </div>
  );

  const projectBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          value={values.title}
          placeholder="Enter title eg: Chat app"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <InputControl
        label="Overview"
        placeholder="Enter basic overview of project"
        value={values.overview}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, overview: event.target.value }))
        }
      />
      <div className={styles.row}>
        <InputControl
          label="Deployed Link"
          placeholder="Enter deployed link of project"
          value={values.link}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, link: event.target.value }))
          }
        />
        <InputControl
          label="Github Link"
          placeholder="Enter github link of project"
          value={values.github}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, github: event.target.value }))
          }
        />
      </div>
      <div className={styles.column}>
        <label>Enter project description</label>
        <InputControl
          value={values.points ? values.points[0] : ""}
          placeholder="Line 1"
          onChange={(event) => handlePoint(event.target.value, 0)}
        />
        <InputControl
          value={values.points ? values.points[1] : ""}
          placeholder="Line 2"
          onChange={(event) => handlePoint(event.target.value, 1)}
        />
        <InputControl
          value={values.points ? values.points[2] : ""}
          placeholder="Line 3"
          onChange={(event) => handlePoint(event.target.value, 2)}
        />
        <InputControl
          value={values.points ? values.points[3] : ""}
          placeholder="Line 4"
          onChange={(event) => handlePoint(event.target.value, 3)}
        />
      </div>
    </div>
  );

  const educationBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          value={values.title}
          label="Title"
          placeholder="Enter title eg: B.Tech"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <InputControl
        label="College/School Name"
        value={values.college}
        placeholder="Enter name of your college/school"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, college: event.target.value }))
        }
      />
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          value={values.startDate}
          type="date"
          placeholder="Enter start date of education"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
        />
        <InputControl
          label="End Date"
          type="date"
          value={values.endDate}
          placeholder="Enter end date of education"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }
        />
      </div>
    </div>
  );

  const basicInfoBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Name"
          value={values.name}
          placeholder="Enter your full name eg: Saksham"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Title"
          value={values.title}
          placeholder="Enter your title eg: Frontend developer"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Linkedin Link"
          value={values.linkedin}
          placeholder="Enter linkedin profile link"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, linkedin: event.target.value }))
          }
        />
        <InputControl
          label="Github Link"
          value={values.github}
          placeholder="Enter github profile link"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, github: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Email"
          type="email"
          value={values.email}
          placeholder="Enter your email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Enter Phone"
          value={values.phone}
          placeholder="Enter your phone number"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, phone: event.target.value }))
          }
        />
      </div>
    </div>
  );

  const achievementsBody = (
    <div className={styles.detail}>
      <div className={styles.column}>
        <label>List your achievements</label>
        <InputControl
          value={values.points ? values.points[0] : ""}
          placeholder="Line 1"
          onChange={(event) => handlePoint(event.target.value, 0)}
        />
        <InputControl
          value={values.points ? values.points[1] : ""}
          placeholder="Line 2"
          onChange={(event) => handlePoint(event.target.value, 1)}
        />
        <InputControl
          value={values.points ? values.points[2] : ""}
          placeholder="Line 3"
          onChange={(event) => handlePoint(event.target.value, 3)}
        />
        <InputControl
          value={values.points ? values.points[3] : ""}
          placeholder="Line 4"
          onChange={(event) => handlePoint(event.target.value, 3)}
        />
      </div>
    </div>
  );

  const summaryBody = (
    <div className={styles.detail}>
      <InputControl
        label="Summary"
        value={values.summary}
        placeholder="Enter your objective/summary"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, summary: event.target.value }))
        }
      />
    </div>
  );

  const otherBody = (
    <div className={styles.detail}>
      <InputControl
        value={values.others}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, others: event.target.value }))
        }
        label="Other"
        placeholder="Enter something"
      />
    </div>
  );

  const selectBody = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo:
        return basicInfoBody;
      case sections.workExp:
        return workExperinceBody;
      case sections.project:
        return projectBody;
      case sections.education:
        return educationBody;
      case sections.achievements:
        return achievementsBody;
      case sections.summary:
        return summaryBody;
      case sections.others:
        return otherBody;
      default:
        return null;
    }
  };

  const handleSubmission = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo: {
        const tempDetail = {
          name: values.name,
          title: values.title,
          linkedin: values.linkedin,
          github: values.github,
          email: values.email,
          phone: values.phone,
        };
        setInfo((prev) => ({
          ...prev,
          [sections.basicInfo]: {
            ...prev[sections.basicInfo],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.workExp: {
        const tempDetail = {
          certificateLink: values.certificateLink,
          title: values.title,
          startDate: values.startDate,
          endDate: values.endDate,
          companyName: values.companyName,
          points: values.points,
        };
        const tempDetails = [...information[sections.workExp]?.details];
        tempDetails[activeDetailIndex] = tempDetail;
        setInfo((prev) => ({
          ...prev,
          [sections.workExp]: {
            ...prev[sections.workExp],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.project: {
        const tempDetail = {
          overview: values.overview,
          title: values.title,
          github: values.github,
          link: values.link,
          points: values.points,
        };
        const tempDetails = [...information[sections.project]?.details];
        tempDetails[activeDetailIndex] = tempDetail;
        setInfo((prev) => ({
          ...prev,
          [sections.project]: {
            ...prev[sections.project],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.education: {
        const tempDetail = {
          title: values.title,
          college: values.college,
          startDate: values.startDate,
          endDate: values.endDate,
        };
        const tempDetails = [...information[sections.education]?.details];
        tempDetails[activeDetailIndex] = tempDetail;
        setInfo((prev) => ({
          ...prev,
          [sections.education]: {
            ...prev[sections.education],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.achievements: {
        const tempPoints = values.points;
        setInfo((prev) => ({
          ...prev,
          [sections.achievements]: {
            ...prev[sections.achievements],
            detail: tempPoints,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.summary: {
        const tempDetail = values.summary;
        setInfo((prev) => ({
          ...prev,
          [sections.summary]: {
            ...prev[sections.summary],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.others: {
        const tempDetail = values.others;
        setInfo((prev) => ({
          ...prev,
          [sections.others]: {
            ...prev[sections.others],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }
      default: {
      }
    }
  };

  const handleAddNew = () => {
    const details = activeInfo?.details;
    if (!details) return;
    const lastDetail = details.slice(-1)[0];
    if (!Object.keys(lastDetail).length) return;
    details?.push({});
    setInfo((prev) => ({
      ...prev,
      [sections[activeSectionKey]]: {
        ...information[sections[activeSectionKey]],
        details: details,
      },
    }));
    setactiveDetailIndex(details?.length-1);
  };

  const handleDeleteDatail = (id) => {
    const details = activeInfo?.details ? [...activeInfo?.details] : "";
    if (!details) return;
    details.splice(id, 1);
    setInfo((prev) => ({
      ...prev,
      [sections[activeSectionKey]]: {
        ...information[sections[activeSectionKey]],
        details: details,
      },
    }));
    setactiveDetailIndex(prev=>prev<id?prev:prev-1);
  };

  useEffect(() => {
    const activeInfo = information[sections[activeSectionKey]];
    setActiveInfo(activeInfo);
    setSectionTitle([sections[activeSectionKey]]);
    setactiveDetailIndex(0);
    setValues({
      name: activeInfo?.detail?.name || "",
      overview: activeInfo?.details
        ? activeInfo.details[0]?.overview || ""
        : "",
      link: activeInfo?.details ? activeInfo.details[0]?.link || "" : "",
      certificateLink: activeInfo?.details
        ? activeInfo.details[0]?.certificateLink || ""
        : "",
      companyName: activeInfo?.details
        ? activeInfo.details[0]?.certificateLink || ""
        : "",
      location: activeInfo?.details
        ? activeInfo.details[0]?.certificateLink || ""
        : "",
      startDate: activeInfo?.details
        ? activeInfo.details[0]?.startDate || ""
        : "",
      endDate: activeInfo?.details ? activeInfo.details[0]?.endDate || "" : "",
      points: activeInfo?.details
        ? activeInfo.details[0]?.points
          ? [...activeInfo.details[0]?.points]
          : ""
        : activeInfo?.points
        ? [...activeInfo.points]
        : "",
      title: activeInfo?.details
        ? activeInfo.details[0]?.title || ""
        : activeInfo?.detail?.title || "",
      linkedin: activeInfo?.detail?.linkedin || "",
      github: activeInfo?.details
        ? activeInfo.details[0]?.github || ""
        : activeInfo?.detail?.github || "",
      phone: activeInfo?.detail?.phone || "",
      email: activeInfo?.detail?.email || "",
      summary: typeof activeInfo?.detail !== Object ? activeInfo.detail : "",
      others: typeof activeInfo?.detail !== Object ? activeInfo.detail : "",
    });
  }, [activeSectionKey]);

  useEffect(() => {
    setActiveInfo(information[sections[activeSectionKey]]);
  }, [information]);

  useEffect(() => {
    const details = activeInfo?.details;
    if(!details)return;
    setValues({
        overview: activeInfo.details[activeDetailIndex]?.overview || "",
        link: activeInfo.details[activeDetailIndex]?.link || "",
        companyName: activeInfo.details[activeDetailIndex]?.companyName || "",
        certificateLink: activeInfo.details[activeDetailIndex]?.certificateLink || "",
        location: activeInfo.details[activeDetailIndex]?.location || "",
        startDate: activeInfo.details[activeDetailIndex]?.startDate || "",
        endDate: activeInfo.details[activeDetailIndex]?.endDate || "",
        points: activeInfo.details[activeDetailIndex]?.points || "",
        title: activeInfo.details[activeDetailIndex]?.title || "",
        linkedin: activeInfo.details[activeDetailIndex]?.linkedin || "",
        github: activeInfo.details[activeDetailIndex]?.github || "",
        college: activeInfo.details[activeDetailIndex]?.college || "",
    })
  }, [activeDetailIndex]);
  

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Object.keys(sections)?.map((curr) => (
          <div
            key={curr}
            className={`${styles.section} ${
              activeSectionKey === curr ? styles.active : ""
            }`}
            onClick={() => setactiveSectionKey(curr)}
          >
            {sections[curr]}
          </div>
        ))}
      </div>
      <div className={styles.body}>
        <InputControl
          label="Title"
          placeholder="Enter section title"
          value={sectionTitle}
          onChange={(event) => setSectionTitle(event.target.value)}
        />
        <div className={styles.chips}>
          {activeInfo?.details
            ? activeInfo?.details?.map((curr, id) => (
                <div
                  className={`${styles.chip} ${
                    activeDetailIndex === id ? styles.active : ""
                  }`}
                  onClick={() => setactiveDetailIndex(id)}
                  key={curr.title + id}
                >
                  <p>
                    {sections[activeSectionKey]} {id + 1}
                  </p>
                  <X onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteDatail(id)}} />
                </div>
              ))
            : ""}
          {activeInfo?.details && activeInfo?.details?.length > 0 ? (
            <div className={styles.new} onClick={handleAddNew}>
              +New
            </div>
          ) : (
            ""
          )}
        </div>
        {selectBody()}
        <button onClick={handleSubmission}>Save</button>
      </div>
    </div>
  );
};

export default Editor;
