import React, { useState } from "react";
import { TextField, Button, Container } from "@mui/material";

const SearchPokemon = (props) => {
  const { onSearch } = props;
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };
  const onClick = (e) => {
    onSearch(search);
  };

  return (
    <>
      <Container sx={{ my: "3rem" }}>
        <TextField
          autoComplete="off"
          label="Filter  Pokemons"
          sx={{ width: "100%" }}
          type="search"
          variant="outlined"
          onChange={onChange}
        />
        <p align="right">
          <Button
            sx={{ background: "#696969", margin: "10px" }}
            variant="contained"
            color="error"
            onClick={onClick}
          >
            Search
          </Button>
        </p>
      </Container>
    </>
  );
};

export default SearchPokemon;
