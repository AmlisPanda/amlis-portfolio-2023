import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Grid, IconButton, Link } from "@mui/material";

const SocialMediaLinks = () => {
  return (
    <Grid container spacing={2} paddingTop={2}>
      <Grid item>
        <IconButton
          href="mailto:celine.ruan@hotmail.com"
          title="Envoyer un mail"
        >
          <AlternateEmailIcon style={{ color: "black" }} />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          href="https://www.linkedin.com/in/celine-ruan/"
          rel="noreferrer"
          target="_blank"
          title="Linkedin"
        >
          <LinkedInIcon style={{ color: "black" }} />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          href="https://github.com/AmlisPanda"
          rel="noreferrer"
          target="_blank"
          title="Github"
        >
          <GitHubIcon style={{ color: "black" }} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default SocialMediaLinks;
