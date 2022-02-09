import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  getAllPokemonsLimit,
  getPokemonsByUrl,
  getPokemonsByNameAndId,
} from "../../Service/pokemonService";
import PokemonList from "./PokemonList";
import SearchPokemon from "./SearchPokemon";
import { Container } from "@mui/material";

const Pokedex = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [pagesList, setPagesList] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState();
  const [errorSearch, setErrorSearch] = useState(false);
  const [searching, setSearching] = useState(false);

  const ContentPage = async (page, limit) => {
    try {
      const resp = await getAllPokemonsLimit(page, limit);
      setPagesList((prevPage) => {
        if (!prevPage) {
          return [...prevPage, resp];
        } else {
          return resp;
        }
      });
      
      setLoading(false);
      setPage((resp) => resp + 1);
      setErrorSearch(false);
    } catch (err) {}
  };

  const ContentPokemon = async () => {
    
    pagesList.map(async (pokemon) => {
      const resp = await getPokemonsByUrl(pokemon.url);
      setPokemonList((prevPokemons) => [...prevPokemons, resp]);
    });
  };

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      setLoading(false);
    setErrorSearch(false);
      return ContentPokemon();
    }
    setLoading(true);
    setErrorSearch(false);
    setSearching(true);
    const result = await getPokemonsByNameAndId(pokemon);
    if (!result) {
      setErrorSearch(true);
      setLoading(false);
      return;
    } else {
      setPokemonList([result]);
    }

    setLoading(false);
    setSearching(false);
  };

  useEffect(() => {
    ContentPage(page, limit);
  }, []);

  
 
  useEffect(() => {
    if (!searching) {
      ContentPokemon();
    }
  }, [pagesList]);

  const onclickMore = () => {
    ContentPage(page, limit);
  };

  return (
    <div>
      <h1>Bienvenido A la pokedex</h1>
      <Container sx={{ my: "2rem" }}>
        <SearchPokemon onSearch={onSearch}></SearchPokemon>
        {errorSearch ? (
          <div> no se encontro el pokemon </div>
        ) : (
          <>
            {loading ? (
              <div> Cargando pokemones...</div>
            ) : (
              <>
                <PokemonList pokedata={pokemonList}></PokemonList>
                <Button variant="contained" onClick={onclickMore}>
                  More
                </Button>
              </>
            )}
          </>
        )}
      </Container>
    </div>
  );
};

export default Pokedex;
