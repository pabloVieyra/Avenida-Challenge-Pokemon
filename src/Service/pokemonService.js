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


export const getAllPokemonsLimit = async (page, limit) => {
  try {
    const offset = (page - 1) * limit
    const res = await Axios.get(`${POKEMON_URL}?limit=${limit}&offset=${offset}`);
    

    return res.data.results;
  } catch (err) {
    return err.response.data;
  }
};

export const getPokemonsByUrl = async (url) => {
  try {
    const res = await Axios.get(url);
    

    return res.data;
  } catch (err) {
    return err.response.data;
  }
};




export const getPokemonsByNameAndId = async (name) => {
  try {
    const res = await Axios.get(`${POKEMON_URL}/${name}`);
    

    return res.data;
  } catch (err) {
    return err.response.data;
  }
};





