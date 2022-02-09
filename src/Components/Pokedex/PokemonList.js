import React from "react";
import PokemonCard from "./PokemonCard";
import { Container, Grid } from "@mui/material";

const PokemonList = ({ pokedata }) => {
  return (
    <>
      <Grid container columnSpacing={2} rowSpacing={4}>
        {pokedata.map((pokemon) => {
          return <PokemonCard pokemon={pokemon}></PokemonCard>;
        })}
      </Grid>
    </>
  );
};

export default PokemonList;
