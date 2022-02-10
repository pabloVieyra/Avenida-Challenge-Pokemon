import React from "react";
import { Typography, Container, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Home = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "1rem",
          backgroundColor: "black  ",
          borderRadius: "25px",
          my: "2rem"
        }}
      >
        <Container
          align="center"
          sx={{
            borderRadius: "25px",
            my: "2rem",
            backgroundColor: "black  ",
          }}
        >
          <Typography
            color="#fafaf4 "
            variant="h2"
            component="div"
            gutterBottom
          >
            Challenge Pokedex
          </Typography>
        </Container>

        <Container
         align="center"
          sx={{
            borderRadius: "25px",
            backgroundColor: "black  ",
          }}
        >
          <Typography
            color="#fafaf4 "
            variant="h3"
            component="div"
            gutterBottom
          >
            Technical challenge
          </Typography>
          </Container>
          <Typography
            color="#fafaf4 "
            variant="h5"
            component="div"
            gutterBottom
          >
            You must implement you own version of the Pokedex:
            <br />
            <Link
              href="https://pokemon.com/us/pokedex/"
              rel="noreferrer"
              target="_blank"
              color="inherit"
            >
              https://pokemon.com/us/pokedex/
            </Link>
            <br />
            You must use the infomation from this API:
            <br />
            <Link
              href="https://pokeapi.co"
              rel="noreferrer"
              target="_blank"
              color="inherit"
            >
              https://pokeapi.co
            </Link>
            <br />
            <Typography
              color="#fafaf4 "
              variant="h4"
              component="div"
              gutterBottom
            >
              Requirements :
            </Typography>
            -It must have responsive design.
            <br />
            -It must allow you to search pokemons by name or ID.
            <br />
            -It must show you the list of pokemons and when you choose one it
            must show you all their details.
            <br />
            -You must upluoad the repository to Git with the instructions to run
            it.
            <br />
          </Typography>
        
        <Container
          align="center"
          sx={{
            borderRadius: "25px",
            my: "2rem",
            backgroundColor: "black  ",
          }}
        >
          <Typography
            color="#fafaf4 "
            variant="h3"
            component="div"
            gutterBottom
          >
            About me
          </Typography>
          <Typography
            color="#fafaf4 "
            variant="h5"
            component="div"
            gutterBottom
          >
            I'm a web developer with skills in javascript, html, css, SQL, Java
            and MongoDB. <br />
            Among my soft skills are my responsability, the hability to work in
            group and comunicate effectively.
          </Typography>
          <Typography
            color="#fafaf4 "
            variant="h3"
            component="div"
            gutterBottom
          >
            Redes
          </Typography>
          <a
            href="https://www.linkedin.com/in/pablo-vieyra/"
            rel="noreferrer"
            target="_blank"
          >
            <LinkedInIcon
              sx={{
                fontSize: 40,
                textDecoration: "none",
                color: "#fafaf4 ",
              }}
            />
          </a>
          <a
            href="https://github.com/pabloVieyra"
            rel="noreferrer"
            target="_blank"
          >
            <GitHubIcon
              sx={{
                fontSize: 40,
                textDecoration: "none",
                color: "#fafaf4 ",
              }}
            />
          </a>
          <Typography color="#fafaf4" variant="h5" component="div" gutterBottom>
            Pablinvieyra1@gmail.com
          </Typography>
        </Container>
      </Container>
    </>
  );
};

export default Home;
