import { Box, Grid, Link } from "@mui/material";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <Grid container className={styles.header} paddingX={2}>
      <nav className={styles.menu}>
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", flexWrap: "wrap" }}
        >
          <Link underline="hover" href="#intro" color="primary">
            Qui suis-je ?
          </Link>
          <Link underline="hover" href="#skills" color="primary" marginLeft={4}>
            Mes compétences
          </Link>
          <Link
            underline="hover"
            href="#experiences"
            color="primary"
            marginLeft={4}
          >
            Mes expériences
          </Link>
        </Box>
      </nav>
    </Grid>
  );
};

export default Header;
