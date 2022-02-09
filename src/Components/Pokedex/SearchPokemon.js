import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

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
      <TextField
        autoComplete="off"
        label="Filtrar  Pokemones"
        sx={{ width: "100%" }}
        type="search"
        variant="outlined"
        onChange={onChange}
      />

      <Button variant="contained" onClick={onClick}>
        Buscar
      </Button>
    </>
  );
};

export default SearchPokemon;
