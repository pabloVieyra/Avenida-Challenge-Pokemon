import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  getAllPokemonsLimit,
  getPokemonsByUrl,
} from "../../Service/pokemonService";
import PokemonList from "./PokemonList";
import SearchPokemon from "./SearchPokemon";
import { Container } from "@mui/material";

const Pokedex = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [pagesList, setPagesList] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);

  const ContentPage = async (page, limit) => {
    const resp = await getAllPokemonsLimit(page, limit);
    setPagesList((prevPage) => {
      if (!prevPage) {
        return [...prevPage, resp];
      } else {
        return resp;
      }
    });
    setPage((resp) => resp + 1);
  };

  const ContentPokemon = async () => {
    pagesList.map(async (pokemon) => {
      const resp = await getPokemonsByUrl(pokemon.url);
      setPokemonList((prevPokemons) => [...prevPokemons, resp]);
    });
  };

  const onclickMore = () => {
    ContentPage(page, limit);
  };

  useEffect(() => {
    ContentPage(page, limit);
  }, []);

  useEffect(() => {
    ContentPokemon();
  }, [pagesList]);

  useEffect(async () => {
    console.log(pokemonList);
  }, [pokemonList]);

  return (
    <div>
      <h1>Bienvenido A la pokedex</h1>
      <SearchPokemon></SearchPokemon>
      <Container sx={{ my: "2rem" }}>
        <PokemonList pokedata={pokemonList}></PokemonList>
        <Button variant="contained" onClick={onclickMore}>
          More
        </Button>
      </Container>
    </div>
  );
};

export default Pokedex;
