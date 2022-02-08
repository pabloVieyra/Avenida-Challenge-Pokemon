import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Pokedex from './Components/Pokedex/Pokedex';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';



function App() {
  return (
   <>
   <BrowserRouter>
    <Routes >
      <Route path="/" element={<Layout />} >
          <Route index element={<Home  />} />
          <Route path="/pokedex" element={<Pokedex/>} />
      </Route>
    </Routes >
 
  </BrowserRouter>
   </>
  );
}

export default App;
