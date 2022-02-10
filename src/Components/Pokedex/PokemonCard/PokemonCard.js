import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { CardDetails } from "./CardDetails";
import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";

const CardWrapper = styled.div`
  width: 100%;
  perspective: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled(motion.div)`
  width: 285px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: black;
  color: #fff;
  position: relative;
  cursor: grab;
`;

const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 25px;
`;

const Circle = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  top: -4.2em;
  right: -10em;
  z-index: 5;
  background-color: #dc143c;
  border-radius: 50%;
`;

const TopContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 15px;
`;

const BottomContainer = styled.div`
  display: flex;
  flex: 0.8;
  padding: 0 1em;
`;

const PokeText = styled.h1`
  color: #fff;
  text-transform: uppercase;
  margin: 0;
  z-index: 10;
  font-size: 30px;
  font-weight: 900;
`;

const PokemonWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Pokemon = styled(motion.div)`
  width: auto;
  height: 190px;
  z-index: 99;
  user-select: none;
  margin-right: 3em;
  margin-top: 4em;
  img {
    width: auto;
    height: 100%;
    user-select: none;
  }
`;

const PokemonCard = ({ pokemon }) => {
  const { name, types, sprites, id } = pokemon;
  const typel = types[0].type.name;

  const poke = {
    number: id,
    type: typel,
  };

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <Grid key={pokemon.id} item md={4} sm={6} xs={12}>
      <CardWrapper>
        <CardContainer
          style={{ x, y, rotateX, rotateY, z: 100 }}
          drag
          dragElastic={0.16}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
        >
          <TopContainer>
            <CircleWrapper>
              <Circle />
            </CircleWrapper>
            <PokemonWrapper>
              <Pokemon
                style={{ x, y, rotateX, rotateY, rotate: "-25deg", z: 100000 }}
                drag
                dragElastic={0.12}
                whileTap={{ cursor: "grabbing" }}
              >
                <img src={sprites.front_default} alt="pokemon" />
              </Pokemon>
            </PokemonWrapper>
            <PokeText>{name}</PokeText>
          </TopContainer>
          <BottomContainer>
            <CardDetails poke={poke} />
          </BottomContainer>
        </CardContainer>
      </CardWrapper>
    </Grid>
  );
};

export default PokemonCard;
