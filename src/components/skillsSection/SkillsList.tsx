import { Chip, Grid } from "@mui/material";
import { blue, green, grey, pink } from "@mui/material/colors";
import React from "react";
import { SkillCat } from "../../types";

interface Props {
  skills: SkillCat[];
}

const SkillsList: React.FC<Props> = ({ skills }) => {
  const getCategoryColor = (skill: SkillCat) => {
    switch (skill.type) {
      case "front-end":
        return pink[400];
      case "back-end":
        return blue[400];
      case "tools":
        return green[400];
      default:
        return grey[600];
    }
  };

  return (
    <Grid container spacing={1}>
      {skills.map((skill) => (
        <Grid item key={skill.label}>
          <Chip
            label={skill.label}
            variant="outlined"
            size="small"
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            style={{
              color: getCategoryColor(skill),
              borderColor: getCategoryColor(skill),
            }}
            sx={{
              height: "auto",
              "& .MuiChip-label": {
                display: "block",
                whiteSpace: "normal",
                padding: "0.14rem 0.8rem",
              },
            }}
          ></Chip>
        </Grid>
      ))}
    </Grid>
  );
};

export default SkillsList;
