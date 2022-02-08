import React, {Suspense,lazy} from 'react';
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import LazyLoad from './Components/LazyLoad/LazyLoad';
const Pokedex = lazy(()=> import('./Components/Pokedex/Pokedex'));
const Home  = lazy(()=> import('./Components/Home/Home'));
const Layout = lazy(()=> import('./Components/Layout/Layout'));

function App() {
  return (
   <>
   <Suspense fallback={<LazyLoad/>}>
   <BrowserRouter>
    <Routes >
      <Route path="/" element={<Layout />} >
          <Route index element={<Home  />} />
          <Route path="/pokedex" element={<Pokedex/>} />
      </Route>
    </Routes >
 
  </BrowserRouter>
  
  </Suspense>
  
   </>
  );
}

export default App;
