import FlightIcon from "@mui/icons-material/Flight";
import HikingIcon from "@mui/icons-material/Hiking";
import PetsIcon from "@mui/icons-material/Pets";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Grid, Typography } from "@mui/material";

import styles from "./HobbiesSection.module.scss";

const HobbiesSection = () => {
  return (
    <div className={styles.root}>
      <Typography
        variant="h6"
        color="primary"
        component="span"
        textAlign="center"
      >
        Centres d&apos;intérêt
      </Typography>
      <Grid container spacing={4} paddingTop={2} justifyContent="center">
        <Grid item className={styles.hobby}>
          <FlightIcon style={{ color: "black" }} fontSize="large" />
          <Typography variant="caption" className={styles.label}>
            Voyages
          </Typography>
        </Grid>
        <Grid item className={styles.hobby}>
          <HikingIcon style={{ color: "black" }} fontSize="large" />
          <Typography variant="caption" className={styles.label}>
            Sport
          </Typography>
        </Grid>
        <Grid item className={styles.hobby}>
          <SportsEsportsIcon style={{ color: "black" }} fontSize="large" />
          <Typography variant="caption" className={styles.label}>
            Jeux
          </Typography>
        </Grid>
        <Grid item className={styles.hobby}>
          <PetsIcon style={{ color: "black" }} fontSize="large" />
          <Typography variant="caption" className={styles.label}>
            Animaux
          </Typography>
        </Grid>
        <Grid item className={styles.hobby}>
          <RestaurantMenuIcon style={{ color: "black" }} fontSize="large" />
          <Typography variant="caption" className={styles.label}>
            Cuisine
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default HobbiesSection;
