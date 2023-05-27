import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { IconButton, ThemeProvider, createTheme } from "@mui/material";
import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import ExperiencesSection from "./components/experiencesSection/ExperiencesSection";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainSection from "./components/mainSection/MainSection";
import SkillsSection from "./components/skillsSection/SkillsSection";
import data from "./data/content.json";

declare module "@mui/material/styles" {
  interface Theme {
    experiences: {
      work: string;
      stage: string;
      diploma: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    experiences?: {
      work?: string;
      stage?: string;
      diploma?: string;
    };
  }
}

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#bb468b",
        light: "#ffd8e8",
      },
      secondary: {
        main: "#f3aa67",
        light: "#d6e3ff",
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      accent: {
        main: "#8091b1",
        light: "#d6e3ff",
      },
    },
    experiences: {
      work: "#bb468b",
      stage: "#8091b1",
      diploma: "#47A992",
    },
  });

  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = (event: Event) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setShowTopButton(event.currentTarget?.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <MainSection />
        <SkillsSection skills={data.skills} />
        <ExperiencesSection
          experiences={data.experiences}
          skills={data.skills}
        />
        {showTopButton && (
          <IconButton
            title="Aller en haut de la page"
            aria-label="Aller en haut de la page"
            color="primary"
            className={styles.goToTop}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <ArrowUpwardIcon />
          </IconButton>
        )}

        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
