import React, { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import styled from "styled-components";
import './App.css';
import fe1 from './assets/fe1.png';
import fe2 from './assets/fe2.png';
import ciphercollector from './assets/ciphercollector.png'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';


const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Project
      </Typography>
      <Typography variant="h3" component="div" sx={{ fontSize: 30 }}>
        CipherCollector
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">

        ＴＣＧ ファイアーエムブレム ０
      </Typography>
      <Typography variant="body2">
        A card viewing and collecting app for the Fire Emblem™ Cipher Trading Card Game.
      </Typography>
    </CardContent>
  </React.Fragment>
);


const StyledCard = styled.div`
position: absolute;
left: max(10vh,${props => `${props.mx - window.innerHeight / 1.5}px`});
top: max(50vh,${props => `${props.my * 1.5 - window.innerHeight}px`});
width: fit-content;
opacity: ${props => props.bg ? 1 : 0};
transition: ease-in-out 4s;
z-index: 9999;
`;

const StyledBg = styled.div`
position: relative;
left: max(0px,${props => `${props.mx - window.innerHeight / 1.5}px`});
top: max(10vh,${props => `${props.my * 1.5 - window.innerHeight / 2}px`});
background-repeat: no-repeat;
background-attachment: fixed;
transition: ease-out 0.5s;
background-image: url(${props => props.bg !== "" ? fe1 : ""});
background-position: center;
background-size: cover;
border-radius: 9999px;
width:70vh;
height: 70vh;
transform: scale(${props => props.bg !== "" ? "1" : "0"});
z-index: -1;
`;

const StyledBgOver = styled.div`
position: absolute;
left: ${props => `${props.mx - window.innerHeight}px`};
top: 0px;
background-repeat: no-repeat;
background-attachment: fixed;
transition: opacity 2s ease-out, left 0.5s ease-out, background-image 0.5s ease-out, transform 0.5s ease-out;
background-image: url(${props => props.bg !== "" ? fe2 : ""});
background-position: center;
background-size: cover;
width: 70vw;
height: 70vh;
opacity: ${props => props.bg !== "" ? "100" : "0"};
transform: scale(${props => props.bg !== "" ? "1" : "0"});
`;

function App() {
  const [bg, setBg] = useState("");
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const updateMouse = (e) => {
    setMouseX(e.pageX)
    setMouseY(e.pageY)
    setBg('ciphercollector')
  }

  return (
    <div class='app'>
      <Header />
      <div class='js-only'>
        <div class='bg'>
          <StyledBg mx={mouseX} my={mouseY} bg={bg} />
          <StyledBgOver mx={mouseX} my={mouseY} bg={bg} />
          <StyledCard mx={mouseX} my={mouseY} bg={bg}>
            <Box sx={{ width: 350 }}>
              <Card variant="outlined">{card}</Card>
            </Box>
          </StyledCard>
        </div>
      </div>
      <div class='home'>
        <div class='projectcontainer'>

          <div class='project'
            onMouseEnter={updateMouse}
            onMouseLeave={() => setBg("")}>
            <div class='projectimg' style={{ backgroundImage: `url(${ciphercollector})` }} />
            <div class='projecttxt'>
              <a href='https://ryanperera.github.io/ciphercollector/' target='_blank' rel="noreferrer">
                <Typography variant="h3" component="div" sx={{ fontSize: 25 }}>CipherCollector </Typography>
              </a>
              <a href='https://github.com/RyanPerera/ciphercollector' target='_blank' rel="noreferrer">
                <GitHubIcon />
              </a>
            </div>
          </div>

          <div class='project'>
            <div class='projectimg' />
            <div>Coming Soon</div>
          </div>

          <div class='project'>
            <div class='projectimg' />
            <div>Coming Soon</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
