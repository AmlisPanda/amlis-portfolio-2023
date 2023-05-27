import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import styles from "./MainSection.module.scss";

import image from "../../assets/developer.jpg";
import SocialMediaLinks from "./SocialMediaLinks";

const MainSection = () => {
  return (
    <div className={styles.root} id="intro">
      <Grid container xs={12} sm={9} alignItems="center">
        <Grid item xs={12} md={6}>
          <h1>
            <Typography variant="h3" component="span">
              Céline
            </Typography>
            &nbsp;
            <Typography variant="h3" component="span" color="primary">
              Ruan
            </Typography>
          </h1>

          <Typography variant="h5" component="h2" color="dark">
            Développeuse web front-end
          </Typography>
          <Typography
            variant="body2"
            component="p"
            className={styles.introduction}
          >
            Avec plus de 10 ans d&apos;expérience dans le développement web, je
            souhaite mettre à profit mes compétences dans le développement
            front-end notamment et je suis toujours prête à relever de nouveaux
            challenges.
          </Typography>
          <Button
            variant="contained"
            href="/CV_Celine_RUAN.pdf"
            target="_blank"
          >
            Télécharger CV
          </Button>
          <SocialMediaLinks />
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={image} className={styles.image} />
        </Grid>
      </Grid>
    </div>
  );
};

export default MainSection;
