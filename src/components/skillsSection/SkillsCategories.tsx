import { Grid, Typography } from "@mui/material";
import React from "react";
import { SkillCategory } from "../../types";
import SkillsList from "./SkillsList";
import styles from "./SkillsSection.module.scss";

interface SkillsCategoriesProps {
  title: string;
  icon: React.ReactNode;
  categories: SkillCategory[];
}

const SkillsCategories: React.FC<SkillsCategoriesProps> = ({
  categories,
  title,
  icon,
}) => {
  return (
    <>
      <div className={styles.categoryHeader}>
        {icon}
        <Typography
          variant="h6"
          color="primary"
          component="span"
          className={styles.categoryTitle}
          marginLeft={1}
        >
          {title}
        </Typography>
      </div>

      <Grid container direction="column" spacing={2} alignItems="flex-start">
        {categories.map((category) => (
          <Grid item key={category.label}>
            <Typography variant="subtitle2" component="div">
              {category.label}
            </Typography>
            <SkillsList
              skills={category.skills.map((skill) => ({
                ...skill,
                type: category.label,
              }))}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SkillsCategories;
