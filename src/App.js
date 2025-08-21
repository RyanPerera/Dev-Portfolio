import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import styled from "styled-components";
import "./App.css";
import fe1 from "./assets/fe1.png";
import fe2 from "./assets/fe2.png";
import ciphercollector from "./assets/ciphercollector.png";
import shouldirip from "./assets/shouldirip.png";
import foodhunterzoro from "./assets/foodhunterzoro.png";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";

const projectsData = {
  ciphercollector: {
    title: "CipherCollector",
    subtitle: "ＴＣＧ ファイアーエムブレム ０",
    description:
      "A card viewing and collecting app for the Fire Emblem™ Cipher Trading Card Game.",
    link: "https://ryanperera.github.io/ciphercollector/",
    github: "https://github.com/RyanPerera/ciphercollector",
    bg1: fe1,
    bg2: fe2,
  },
  shouldirip: {
    title: "ShouldIRip?",
    subtitle: "Pokémon TCG Decision Helper",
    description:
      "A fun app to help you decide whether you should buy Pokémon TCG booster packs or singles.",
    link: "https://ryanperera.github.io/shouldirip/",
    github: "https://github.com/RyanPerera/shouldirip",
    bg1: "",
    bg2: "",
  },
  foodhunterzoro: {
    title: "Food Hunter ZORO?",
    subtitle: "A MakeCode Arcade game",
    description:
      "A fun game made using MakeCode Arcade and custom drawn sprites and music. Play as Zoro and slice as many fruit as you can!",
    link: "https://ryanperera.github.io/Food-Hunter-Zoro/",
    github: "https://github.com/RyanPerera/Food-Hunter-Zoro",
    bg1: foodhunterzoro,
    bg2: "",
  },
};

const ProjectCard = ({ project }) => {
  if (!project) return null;
  return (
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Project
      </Typography>
      <Typography variant="h3" component="div" sx={{ fontSize: 30 }}>
        {project.title}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {project.subtitle}
      </Typography>
      <Typography variant="body2">{project.description}</Typography>
    </CardContent>
  );
};

const StyledCard = styled.div`
  position: absolute;
  left: max(10vh, ${(props) => `${props.mx - window.innerHeight / 1.5}px`});
  top: max(50vh, ${(props) => `${props.my * 1.5 - window.innerHeight}px`});
  width: fit-content;
  opacity: ${(props) => (props.bg ? 1 : 0)};
  transition: ease-in-out 4s;
  z-index: 9999;
`;

const StyledBg = styled.div`
  position: relative;
  left: max(0px, ${(props) => `${props.mx - window.innerHeight / 1.5}px`});
  top: max(10vh, ${(props) => `${props.my * 1.5 - window.innerHeight / 2}px`});
  background-repeat: no-repeat;
  background-attachment: fixed;
  transition: ease-out 0.5s;
  background-image: ${(props) => (props.bg1 ? `url(${props.bg1})` : "")};
  background-position: center;
  background-size: cover;
  border-radius: 9999px;
  width: 70vh;
  height: 70vh;
  transform: scale(${(props) => (props.bg1 ? "1" : "0")});
  z-index: -1;
`;

const StyledBgOver = styled.div`
  position: absolute;
  left: ${(props) => `${props.mx - window.innerHeight}px`};
  top: 0px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  transition: opacity 2s ease-out, left 0.5s ease-out,
    background-image 0.5s ease-out, transform 0.5s ease-out;
  background-image: ${(props) => (props.bg2 ? `url(${props.bg2})` : "")};
  background-position: center;
  background-size: cover;
  width: 70vw;
  height: 70vh;
  opacity: ${(props) => (props.bg2 ? "100" : "0")};
  transform: scale(${(props) => (props.bg2 ? "1" : "0")});
`;

function App() {
  const [bg, setBg] = useState("");
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const updateMouse = (e, project) => {
    setMouseX(e.pageX);
    setMouseY(e.pageY);
    setBg(project);
  };

  return (
    <div class="app">
      <Header />
      <div class="js-only">
        <div class="bg">
          <StyledBg mx={mouseX} my={mouseY} bg1={projectsData[bg]?.bg1} />
          <StyledBgOver mx={mouseX} my={mouseY} bg2={projectsData[bg]?.bg2} />
          <StyledCard mx={mouseX} my={mouseY} bg={bg}>
            <Box sx={{ width: 350 }}>
              <Card variant="outlined">
                <ProjectCard project={projectsData[bg]} />
              </Card>
            </Box>
          </StyledCard>
        </div>
      </div>
      <div class="home">
        <div class="projectcontainer">
          <div
            class="project"
            onMouseEnter={(e) => updateMouse(e, "ciphercollector")}
            onMouseLeave={() => setBg("")}
          >
            <div
              class="projectimg"
              style={{ backgroundImage: `url(${ciphercollector})` }}
            />
            <div class="projecttxt">
              <a
                href="https://ryanperera.github.io/ciphercollector/"
                target="_blank"
                rel="noreferrer"
              >
                <Typography variant="h3" component="div" sx={{ fontSize: 25 }}>
                  CipherCollector{" "}
                </Typography>
              </a>
              <a
                href="https://github.com/RyanPerera/ciphercollector"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>

          <div
            class="project"
            onMouseEnter={(e) => updateMouse(e, "shouldirip")}
            onMouseLeave={() => setBg("")}
          >
            <div
              class="projectimg"
              style={{ backgroundImage: `url(${shouldirip})` }}
            />
            <div class="projecttxt">
              <a
                href="https://ryanperera.github.io/shouldirip/"
                target="_blank"
                rel="noreferrer"
              >
                <Typography variant="h3" component="div" sx={{ fontSize: 25 }}>
                  ShouldIRip?{" "}
                </Typography>
              </a>
              <a
                href="https://github.com/RyanPerera/shouldirip"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>

          <div
            class="project"
            onMouseEnter={(e) => updateMouse(e, "foodhunterzoro")}
            onMouseLeave={() => setBg("")}
          >
            <div
              class="projectimg"
              style={{ backgroundImage: `url(${foodhunterzoro})` }}
            />
            <div class="projecttxt">
              <a
                href="https://ryanperera.github.io/Food-Hunter-Zoro/"
                target="_blank"
                rel="noreferrer"
              >
                <Typography variant="h3" component="div" sx={{ fontSize: 25 }}>
                  Food Hunter ZORO
                </Typography>
              </a>
              <a
                href="https://github.com/RyanPerera/Food-Hunter-Zoro"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
