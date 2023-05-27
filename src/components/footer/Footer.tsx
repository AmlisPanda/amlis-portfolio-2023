import { Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      style={{ backgroundColor: "#1c1a1c", color: "white" }}
      paddingY={3}
    >
      <Typography variant="caption" alignItems="center">
        © Céline RUAN 2023
      </Typography>
      <Typography variant="caption">
        Développé avec React et Material UI
      </Typography>
      <Typography variant="caption">
        Illustration par{" "}
        <a href="http://www.freepik.com">pikisuperstar / Freepik</a>
      </Typography>
    </Grid>
  );
};

export default Footer;
