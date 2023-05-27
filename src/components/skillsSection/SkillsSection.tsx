/* eslint-disable react/prop-types */
import { Card, CardContent, Grid, Typography } from "@mui/material";

import { SkillsData } from "../../types";
import SkillsCategories from "./SkillsCategories";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import WorkIcon from "@mui/icons-material/Work";

import styles from "./SkillsSection.module.scss";

interface Props {
  skills: SkillsData;
}

const SkillsSection: React.FC<Props> = ({ skills }) => {
  const frontEndCategories = skills["front-end"];
  const backEndCategories = skills["back-end"];
  const toolsCategories = skills["tools"];
  const otherCategories = skills["other"];
  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      className={styles.container}
      id="skills"
      paddingBottom={4}
    >
      <Typography variant="h6" color="primary" textAlign="center" paddingY={2}>
        Mes compétences
      </Typography>
      <Grid container spacing={3} alignItems="stretch" xs={12} md={12} lg={9}>
        <Grid item xs={12} md={6} lg={3}>
          <Card variant="outlined" className={styles.card}>
            <CardContent>
              <SkillsCategories
                categories={frontEndCategories}
                icon={<DesignServicesIcon color="primary" />}
                title="Front-End"
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card variant="outlined" className={styles.card}>
            <CardContent>
              <SkillsCategories
                categories={backEndCategories}
                icon={<IntegrationInstructionsIcon color="primary" />}
                title="Back-End"
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card variant="outlined" className={styles.card}>
            <CardContent>
              <SkillsCategories
                categories={toolsCategories}
                icon={<BuildCircleIcon color="primary" />}
                title="Outils"
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card variant="outlined" className={styles.card}>
            <CardContent>
              <SkillsCategories
                categories={otherCategories}
                icon={<WorkIcon color="primary" />}
                title="Autres"
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SkillsSection;
