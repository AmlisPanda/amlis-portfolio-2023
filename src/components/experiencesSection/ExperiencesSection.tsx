import HomeWorkIcon from "@mui/icons-material/HomeWork";
import SchoolIcon from "@mui/icons-material/School";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import { Link, Typography, useTheme } from "@mui/material";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience, ExperienceType, SkillCat, SkillsData } from "../../types";
import CompaniesSection from "../companiesSection/CompaniesSection";
import SkillsList from "../skillsSection/SkillsList";
import styles from "./ExperiencesSection.module.scss";

interface Props {
  experiences: Experience[];
  skills: SkillsData;
}
const ExperiencesSection: React.FC<Props> = ({ experiences, skills }) => {
  const theme = useTheme();

  const getIcon = (type: ExperienceType) => {
    const color = "white";
    return (
      <>
        {type === "work" && (
          <WorkHistoryIcon sx={{ fontSize: 80 }} style={{ color }} />
        )}
        {type === "diploma" && (
          <SchoolIcon sx={{ fontSize: 80 }} style={{ color }} />
        )}
        {type === "stage" && (
          <HomeWorkIcon sx={{ fontSize: 80 }} style={{ color }} />
        )}
      </>
    );
  };

  const allSkills = Object.keys(skills).reduce((result: SkillCat[], s) => {
    result = [
      ...result,
      ...skills[s].flatMap((skill) =>
        skill.skills.map((sk) => ({ ...sk, type: s }))
      ),
    ];
    return result;
  }, []);

  return (
    <div id="experiences" className={styles.root}>
      <Typography variant="h6" color="primary" textAlign="center" paddingY={2}>
        Mes expériences
      </Typography>
      <CompaniesSection />
      <VerticalTimeline animate={true} lineColor={theme.palette.grey["300"]}>
        {experiences.map((xp, index) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          const typeColor = theme.experiences[xp.type];
          return (
            <VerticalTimelineElement
              key={index}
              className={`timeline-element--${xp.type}`}
              date={`${xp.date}`}
              dateClassName="timeline-element--date"
              icon={getIcon(xp.type as ExperienceType)}
              iconStyle={{
                backgroundColor: typeColor,
                color: "#fff",
              }}
            >
              <Typography
                variant="subtitle1"
                component="div"
                color={typeColor}
                fontWeight={600}
              >
                {xp.workPosition}
              </Typography>
              {xp.companyUrl ? (
                <Link
                  href={xp.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  underline="hover"
                  variant="caption"
                >
                  {xp.place}
                </Link>
              ) : (
                <Typography variant="caption" component="span" color="dark">
                  {xp.place}
                </Typography>
              )}
              &nbsp;
              <Typography variant="caption" color="grey">
                {xp.city}, {xp.country}
              </Typography>
              {xp.description && (
                <Typography variant="body2" fontSize={12}>
                  {xp.description.map((d, index) => (
                    <li key={index}>{d}</li>
                  ))}
                </Typography>
              )}
              <SkillsList
                skills={
                  xp.skills?.map(
                    (s) =>
                      allSkills.find((skill) => skill.label === s) || {
                        label: s,
                        type: "",
                      }
                  ) || []
                }
              />
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default ExperiencesSection;
