import { Grid, Typography } from "@mui/material";

import eudonet from "../../assets/eudonet-logo.png";
import horoquartz from "../../assets/horoquartz-logo.png";
import octopus from "../../assets/octopus-logo.png";

import styles from "./CompaniesSection.module.scss";

const CompaniesSection = () => {
  return (
    <div className={styles.root}>
      <Typography
        variant="subtitle1"
        component="span"
        textAlign="center"
        marginBottom={2}
      >
        Quelques éditeurs de logiciel pour lesquels j&apos;ai travaillé :
      </Typography>
      <Grid
        container
        spacing={6}
        md={9}
        lg={9}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sm={4} justifyContent="center">
          <img src={horoquartz} />
        </Grid>
        <Grid item sm={4} container justifyContent="center">
          <img src={eudonet} />
        </Grid>
        <Grid item sm={4} justifyContent="center">
          <img src={octopus} />
        </Grid>
      </Grid>
    </div>
  );
};

export default CompaniesSection;
