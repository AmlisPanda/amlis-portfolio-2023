import { Grid, Typography } from "@mui/material";

import eudonet from "../../assets/eudonet-logo.png";
import horoquartz from "../../assets/horoquartz-logo.png";
import octopus from "../../assets/octopus-logo.png";

import styles from "./CompaniesSection.module.scss";

const CompaniesSection = () => {
  return (
    <div className={styles.root}>
      <Typography variant="subtitle1" component="span" textAlign="center">
        Quelques éditeurs de logiciel pour lesquels j&apos;ai travaillé :
      </Typography>
      <Grid
        container
        spacing={6}
        xs={12}
        lg={9}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={4} justifyContent="center">
          <img src={horoquartz} />
        </Grid>
        <Grid item lg={4} container justifyContent="center">
          <img src={eudonet} />
        </Grid>
        <Grid item lg={4} justifyContent="center">
          <img src={octopus} />
        </Grid>
      </Grid>
    </div>
  );
};

export default CompaniesSection;
