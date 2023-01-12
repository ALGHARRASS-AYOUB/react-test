import React from 'react'
import { SpinnerCircular, SpinnerDotted } from 'spinners-react';

function Hero({title,backdrop}) {
  
  function setHeader(){
    if(true){
    return <>
        <div className="hero-backdrop" style={{ backgroundImage:`url(${backdrop})` }}></div>
        <h1 className='hero-text'> {title}</h1>
      </>  
    }
  }

  return (
    <header className='bg-dark text-white p-5 hero-container'>
      {(title=="loading")?<SpinnerDotted/>: setHeader()}
    </header>
  )
}

export default Hero