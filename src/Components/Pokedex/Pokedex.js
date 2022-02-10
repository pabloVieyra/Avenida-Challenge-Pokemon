import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  getAllPokemonsLimit,
  getPokemonsByUrl,
  getPokemonsByNameAndId,
} from "../../Service/pokemonService";
import PokemonList from "./PokemonList";
import SearchPokemon from "./PokemonSearch/SearchPokemon";
import { Container } from "@mui/material";
import PokeLoading from "./PokemonSearch/PokeLoading";
import SearchError from "./PokemonSearch/SearchError";



const Pokedex = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [pagesList, setPagesList] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState();
  const [errorSearch, setErrorSearch] = useState(false);
  const [searching, setSearching] = useState(false);
  const [search, setSearch] = useState(false);

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
    setSearch(false);
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
    setSearch(true);

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
    <>
      <Container
        align="center"
        sx={{
          borderRadius: "25px",
          my: "2rem",
          backgroundColor: "#fafaf4  ",
        }}
      >
        <Typography variant="h2" component="div" align="center" gutterBottom>
          Pokedex
        </Typography>

        <Container sx={{ my: "2rem" }}>
          <SearchPokemon onSearch={onSearch}></SearchPokemon>
        </Container>
      </Container>
      <Container sx={{ my: "2rem" }}>
        {errorSearch ? (
          <SearchError/>
        ) : (
          <>
            {loading ? (
              <PokeLoading/>
            ) : (
              <>
                <PokemonList pokedata={pokemonList}></PokemonList>
                {search === true ? (<></>):(<>
                <p align="center">
                  <Button
                    sx={{ background: "#696969" }}
                    variant="contained"
                    color="error"
                    onClick={onclickMore}
                  >
                    More
                  </Button>
                </p>
                </>)}
              </>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default Pokedex;
