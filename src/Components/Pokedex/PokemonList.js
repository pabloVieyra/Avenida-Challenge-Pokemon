import React from "react";
import { Grid } from "@mui/material";
import PokemonCard from "./PokemonCard/PokemonCard";

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
