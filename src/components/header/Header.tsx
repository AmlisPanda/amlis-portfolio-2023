import { Grid, Link } from "@mui/material";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <Grid container className={styles.header} justifyContent="end">
      <nav className={styles.menu}>
        <ul>
          <li>
            <Link underline="hover" href="#intro" color="primary">
              Qui suis-je ?
            </Link>
          </li>
          <li>
            <Link underline="hover" href="#skills" color="primary">
              Mes compétences
            </Link>
          </li>
          <li>
            <Link underline="hover" href="#experiences" color="primary">
              Mes expériences
            </Link>
          </li>
        </ul>
      </nav>
    </Grid>
  );
};

export default Header;
