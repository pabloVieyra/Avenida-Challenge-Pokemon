import React from 'react';
import photo from '../../assets/pokebola-logo.png'
import './LazyLoad.css'

const LazyLoad = () => {
  return <div className='Lazy'>
      <header className='Lazy-header '>
     <img src={photo} height="80px" className='Lazy-logo'></img>
     </header>
  </div>;
};

export default LazyLoad;
