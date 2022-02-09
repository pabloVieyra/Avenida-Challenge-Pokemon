import Axios from 'axios';


const POKEDEX_URL = process.env.REACT_APP_POKEDEX_URL;
const POKEMON_URL = process.env.REACT_APP_POKEMON_URL;

export const getPokedex = async () => {
  try {
    const res = await Axios.get(POKEDEX_URL);
    
    return res.data.data;
  } catch (err) {
    return err.response.data;
  }
};


export const getAllPokemonsLimit = async (limit=10, offset=0) => {
  try {
    const res = await Axios.get(`${POKEMON_URL}?limit=${limit}&offset=${offset}`);
    

    return res.data.data;
  } catch (err) {
    return err.response.data;
  }
};

export const getPokemonsById = async (id) => {
  try {
    const res = await Axios.get(`${POKEMON_URL}/${id}`);
    

    return res.data.data;
  } catch (err) {
    return err.response.data;
  }
};

export const getPokemonsByName = async (name) => {
  try {
    const res = await Axios.get(`${POKEMON_URL}/${name}`);
    

    return res.data.data;
  } catch (err) {
    return err.response.data;
  }
};





